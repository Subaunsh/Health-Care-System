'use client';

import type { ReactNode } from 'react';
import { SpecialistSidebarNav } from './specialist-sidebar-nav';
import PatientsPage from '@/app/patients/page';

interface SpecialistLayoutProps {
  children?: ReactNode;
  showContent?: boolean;
}

export function SpecialistLayout({ showContent = false }: SpecialistLayoutProps) {
  if (showContent) {
    return <PatientsPage />;
  }

  return <SpecialistSidebarNav />;
}
