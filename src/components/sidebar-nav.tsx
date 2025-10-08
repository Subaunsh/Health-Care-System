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
} from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

const navItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/specialists', label: 'Find a Specialist', icon: Stethoscope },
  { href: '/medications', label: 'Medications', icon: Tablet },
  { href: '/consultations', label: 'Consultations', icon: Video },
  { href: '/insights', label: 'Insights', icon: Sparkles },
  { href: '/profile', label: 'Profile', icon: User },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname === item.href}
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
