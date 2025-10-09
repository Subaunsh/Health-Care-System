'use client';

import Link from 'next/link';
import { HeartPulse, User } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { AuthForm } from './auth-form';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <HeartPulse className="h-5 w-5" />
            </div>
            <span className="font-headline text-lg font-bold">HealthSync</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <User />
                <span className="sr-only">Sign Up / Log In</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="sr-only">Authentication</DialogTitle>
              </DialogHeader>
              <AuthForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
