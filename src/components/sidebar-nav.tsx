'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  LayoutDashboard,
  Tablet,
  Video,
  Sparkles,
  User,
  Stethoscope,
  Settings,
} from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/specialists', label: 'Find a Specialist', icon: Stethoscope },
  { href: '/medications', label: 'Medications', icon: Tablet },
  { href: '/consultations', label: 'Consultations', icon: Video },
  { href: '/insights', label: 'Insights', icon: Sparkles },
  { href: '/profile', label: 'Profile', icon: User },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export function SidebarNav() {
  const pathname = usePathname();
  const isPatientRoute = ['/dashboard', '/medications', '/consultations', '/insights', '/profile', '/specialists', '/settings'].includes(pathname);


  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname === item.href || (!isPatientRoute && item.href === '/specialists')}
            tooltip={{
              children: item.label,
              side: 'right',
            }}
          >
            <Link href={item.href}>
              <item.icon />
              <span>{item.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
