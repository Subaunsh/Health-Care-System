'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { SidebarNav } from './sidebar-nav';
import SpecialistsPage from '@/app/specialists/page';

interface PatientLayoutProps {
  children?: ReactNode;
  showContent?: boolean;
}

export function PatientLayout({ children, showContent = false }: PatientLayoutProps) {
  const pathname = usePathname();
  const isPatientRoute = ['/dashboard', '/medications', '/consultations', '/insights', '/profile', '/specialists', '/settings'].includes(pathname);

  if (showContent) {
    if (isPatientRoute) {
        return <>{children}</>;
    }
    // Default to specialists page for patient role
    return <SpecialistsPage />;
  }

  return <SidebarNav />;
}
