'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { SpecialistSidebarNav } from './specialist-sidebar-nav';
import PatientsPage from '@/app/patients/page';

interface SpecialistLayoutProps {
  children?: ReactNode;
  showContent?: boolean;
}

export function SpecialistLayout({ children, showContent = false }: SpecialistLayoutProps) {
    const pathname = usePathname();
  if (showContent) {
    if (pathname === '/patients' || pathname === '/') {
        return <PatientsPage />;
    }
    return <>{children}</>;
  }

  return <SpecialistSidebarNav />;
}
