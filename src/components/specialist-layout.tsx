'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { SpecialistSidebarNav } from './specialist-sidebar-nav';
import PatientsPage from '@/app/patients/page';
import ProfilePage from '@/app/profile/page';

interface SpecialistLayoutProps {
  children?: ReactNode;
  showContent?: boolean;
}

export function SpecialistLayout({ children, showContent = false }: SpecialistLayoutProps) {
    const pathname = usePathname();
  if (showContent) {
    if (pathname === '/' || pathname === '/patients') {
        return <PatientsPage />;
    }
     if (pathname === '/profile') {
        return <ProfilePage />;
    }
    return <>{children}</>;
  }

  return <SpecialistSidebarNav />;
}
