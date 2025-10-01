'use client';

import { Card } from '@/components/ui/card';
import { Mic as Mic2, Users, Scissors, Briefcase, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalEpisodes: 0,
    publishedEpisodes: 0,
    totalGuests: 0,
    totalClips: 0,
    totalSponsors: 0,
    activeProjects: 0,
  });



  const statCards = [
    {
      title: 'Total Episodes',
      value: stats.totalEpisodes,
      subtitle: `${stats.publishedEpisodes} published`,
      icon: Mic2,
      color: 'from-yellow-400 to-yellow-500',
    },
    {
      title: 'Guests',
      value: stats.totalGuests,
      subtitle: 'Featured guests',
      icon: Users,
      color: 'from-blue-400 to-blue-500',
    },
    {
      title: 'Clips',
      value: stats.totalClips,
      subtitle: 'Short-form content',
      icon: Scissors,
      color: 'from-green-400 to-green-500',
    },
    {
      title: 'Active Sponsors',
      value: stats.totalSponsors,
      subtitle: 'Current partnerships',
      icon: Briefcase,
      color: 'from-purple-400 to-purple-500',
    },
    {
      title: 'Active Projects',
      value: stats.activeProjects,
      subtitle: 'In progress',
      icon: TrendingUp,
      color: 'from-orange-400 to-orange-500',
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here&apos;s what&apos;s happening with your podcast.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.subtitle}</p>
                </div>
                <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="bg-yellow-400 p-2 rounded-full">
                <Mic2 className="h-4 w-4 text-black" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">New episode published</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="bg-blue-400 p-2 rounded-full">
                <Users className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Guest added</p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="bg-green-400 p-2 rounded-full">
                <Scissors className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Clip created</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Quick Stats</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Episodes This Month</span>
                <span className="font-semibold">4</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Clips Generated</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Active Sponsorships</span>
                <span className="font-semibold">3</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-400 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
