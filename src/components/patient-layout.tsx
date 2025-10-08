'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { SidebarNav } from './sidebar-nav';
import SpecialistsPage from '@/app/specialists/page';
import DashboardPage from '@/app/page';

interface PatientLayoutProps {
  children?: ReactNode;
  showContent?: boolean;
}

export function PatientLayout({ children, showContent = false }: PatientLayoutProps) {
  const pathname = usePathname();

  if (showContent) {
    if (pathname === '/') {
      return <SpecialistsPage />;
    }
    if (pathname === '/dashboard') {
        return <DashboardPage />;
    }
    if (['/medications', '/consultations', '/insights', '/profile', '/specialists'].includes(pathname)) {
        return <>{children}</>;
    }
    // Default to specialists page for patient role
    return <SpecialistsPage />;
  }

  return <SidebarNav />;
}
