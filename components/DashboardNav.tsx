'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Mic as Mic2, Users, Scissors, Briefcase, FolderKanban, ChartBar as BarChart3, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/episodes', label: 'Episodes', icon: Mic2 },
  { href: '/dashboard/guests', label: 'Guests', icon: Users },
  { href: '/dashboard/clips', label: 'Clips', icon: Scissors },
  { href: '/dashboard/sponsors', label: 'Sponsors', icon: Briefcase },
  { href: '/dashboard/projects', label: 'Projects', icon: FolderKanban },
  { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen fixed left-0 top-0 flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <Link href="/dashboard" className="flex items-center space-x-2 group">
          <div className="bg-yellow-400 p-2 rounded-lg group-hover:bg-yellow-500 transition-colors">
            <Mic2 className="h-5 w-5 text-black" />
          </div>
          <div>
            <span className="font-bold text-lg">2 Cents</span>
            <p className="text-xs text-gray-400">Dashboard</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors',
                isActive
                  ? 'bg-yellow-400 text-black font-semibold'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <Link href="/" className="block mb-2">
          <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
            View Public Site
          </Button>
        </Link>
        <Button variant="ghost" className="w-full text-gray-400 hover:text-white hover:bg-gray-800">
          <LogOut className="h-5 w-5 mr-2" />
          Sign Out
        </Button>
      </div>
    </aside>
  );
}
