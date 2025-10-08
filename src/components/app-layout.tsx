'use client';
import type { ReactNode } from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger,
  SidebarGroup,
} from '@/components/ui/sidebar';
import { UserMenu } from './user-menu';
import { SidebarNav } from './sidebar-nav';
import { HeartPulse } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useState } from 'react';
import PatientsPage from '@/app/patients/page';
import { usePathname } from 'next/navigation';
import SpecialistsPage from '@/app/specialists/page';
import { SpecialistSidebarNav } from './specialist-sidebar-nav';

export function AppLayout({ children }: { children: ReactNode }) {
  const [role, setRole] = useState('patient');
  const pathname = usePathname();

  const renderContent = () => {
    if (role === 'specialist') {
      if (pathname === '/patients' || pathname === '/') {
        return <PatientsPage />;
      }
      return children;
    }

    if (role === 'patient') {
      if (pathname === '/specialists' || pathname === '/') {
        return <SpecialistsPage />;
      }
      return children;
    }

    return children;
  };

  const renderNav = () => {
    if (role === 'specialist') {
      return <SpecialistSidebarNav />;
    }
    return <SidebarNav />;
  };

  const finalContent = () => {
    if (role === 'specialist') {
      return <PatientsPage />;
    }
    if (role === 'patient' && (pathname === '/' || pathname === '/specialists')) {
        return <SpecialistsPage />;
    }
    return children;
  }

  return (
    <SidebarProvider>
      <Sidebar
        variant="sidebar"
        collapsible="icon"
        className="border-r"
      >
        <SidebarHeader className="p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <HeartPulse className="h-5 w-5" />
            </div>
            <span className="font-headline text-lg font-bold">HealthSync</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
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
              <ToggleGroupItem value="specialist" aria-label="Toggle specialist view">
                Specialist
              </ToggleGroupItem>
            </ToggleGroup>
          </SidebarGroup>
          {renderNav()}
        </SidebarContent>
        <SidebarFooter>
          <UserMenu />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="p-4 pt-12 md:p-8">
        <div className="absolute left-4 top-4 md:hidden">
            <SidebarTrigger />
        </div>
        {finalContent()}
      </SidebarInset>
    </SidebarProvider>
  );
}
