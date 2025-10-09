
'use client';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { HeartPulse, Home, LogIn, Info, Mail } from 'lucide-react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { UserMenu } from './user-menu';
import { PatientLayout } from './patient-layout';
import { SpecialistLayout } from './specialist-layout';
import Link from 'next/link';

export function AppLayout({ children }: { children: ReactNode }) {
  const [role, setRole] = useState('patient');

  return (
    <SidebarProvider>
      <Sidebar variant="sidebar" collapsible="icon" className="border-r">
        <SidebarHeader className="p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <HeartPulse className="h-5 w-5" />
            </div>
            <span className="font-headline text-lg font-bold">HealthSync</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/">
                  <Home />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <Info />
                  <span>About Us</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <Mail />
                  <span>Contact Us</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <LogIn />
                  <span>Log in</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarSeparator />
          <SidebarGroup className="p-2">
            <ToggleGroup
              type="single"
              defaultValue="patient"
              className="grid grid-cols-2"
              onValueChange={(value) => {
                if (value) setRole(value);
              }}
            >
              <ToggleGroupItem value="patient" aria-label="Toggle patient view">
                Patient
              </ToggleGroupItem>
              <ToggleGroupItem
                value="specialist"
                aria-label="Toggle specialist view"
              >
                Specialist
              </ToggleGroupItem>
            </ToggleGroup>
          </SidebarGroup>
          {role === 'patient' ? <PatientLayout /> : <SpecialistLayout />}
        </SidebarContent>
        <SidebarFooter>
          <UserMenu />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="p-4 pt-12 md:p-8">
        <div className="absolute left-4 top-4 md:hidden">
          <SidebarTrigger />
        </div>
        {role === 'patient' ? (
          <PatientLayout showContent>{children}</PatientLayout>
        ) : (
          <SpecialistLayout showContent>{children}</SpecialistLayout>
        )}
      </SidebarInset>
    </SidebarProvider>
  );
}
