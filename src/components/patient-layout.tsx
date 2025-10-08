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

  if (showContent) {
    if (pathname === '/' || pathname === '/specialists') {
      return <SpecialistsPage />;
    }
    return <>{children}</>;
  }

  return <SidebarNav />;
}
