'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export function UserMenu() {
    const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar');

  return (
    <div className="p-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-12 w-full items-center justify-start gap-2 px-2"
          >
            <Avatar className="h-8 w-8">
              {userAvatar && <Image src={userAvatar.imageUrl} alt={userAvatar.description} width={32} height={32} data-ai-hint={userAvatar.imageHint} />}
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="text-sm font-medium">Alex Doe</p>
              <p className="text-xs text-muted-foreground">alex.doe@email.com</p>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Alex Doe</p>
              <p className="text-xs leading-none text-muted-foreground">
                alex.doe@email.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
