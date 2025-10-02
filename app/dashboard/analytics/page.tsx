'use client';

import { Card } from '@/components/ui/card';
import axios from 'axios';
import { TrendingUp, Eye, Youtube,  Video } from 'lucide-react';
import {useState, useEffect} from 'react';

export default function AnalyticsPage() {

  type YTStatistics = {
    viewCount: string;
    subscriberCount: string;
    videoCount: string;
  };
  const [ytData, setYtData] = useState<YTStatistics>([]);
  const [ytVideoData, setYtVideoData] = useState<any[]>([]);


   useEffect(() => {
      const fetchYoutubeData = async () => {
        try {
          const data = await axios.get(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCJJBtUqjm-QjJ7Cvtz0yqbQ
  &key=AIzaSyBidMeBzIxM42xDfPoBHetgVCn_ktIGQOs`,
          );
          setYtData(data.data.items[0].statistics);
          // console.log(data.data.items[0].statistics);
        } catch (error) {
          console.error(error);
        }
      };
  
      const fetchYTVideoData = async () => {
        try {
          const data = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCJJBtUqjm-QjJ7Cvtz0yqbQ&maxResults=490&order=date&type=video&key=AIzaSyBidMeBzIxM42xDfPoBHetgVCn_ktIGQOs`,
          );
          setYtVideoData(data);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchYoutubeData();
      fetchYTVideoData();
    }, []);

    const totalSubscribers = parseInt(ytData.subscriberCount).toLocaleString();
    const totalViews = parseInt(ytData.viewCount).toLocaleString();
    const totalVideos = parseInt(ytData.videoCount).toLocaleString();

      const stats = [
    { label: 'Total Subscribers', value: totalSubscribers, change: '+12%', icon: Youtube, color: 'text-red-600' },
    { label: 'Total Views', value: totalViews, change: '+8%', icon: Eye, color: 'text-blue-600' },
    { label: 'Total Videos', value: totalVideos, change: '+24%', icon: Video, color: 'text-purple-600' },
    { label: 'Growth Rate', value: '15.3%', change: '+3%', icon: TrendingUp, color: 'text-yellow-600' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Analytics</h1>
        <p className="text-gray-600">Track your podcast performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className={`text-sm mt-1 ${stat.color}`}>{stat.change} from last month</p>
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Top Episodes</h2>
          <div className="space-y-4">
            {[
              { title: 'Building a SaaS from Scratch', plays: 12453 },
              { title: 'Marketing Strategies That Work', plays: 10892 },
              { title: 'Scaling Your Startup', plays: 9234 },
              { title: 'Product-Market Fit Secrets', plays: 8756 },
            ].map((episode, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center text-black font-bold text-sm">
                    {i + 1}
                  </div>
                  <span className="font-medium">{episode.title}</span>
                </div>
                <span className="text-gray-600">{episode.plays.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Platform Distribution</h2>
          <div className="space-y-4">
            {[
              { platform: 'Spotify', percentage: 45, color: 'bg-green-500' },
              { platform: 'YouTube', percentage: 30, color: 'bg-red-500' },
              { platform: 'Apple Podcasts', percentage: 20, color: 'bg-purple-500' },
              { platform: 'Other', percentage: 5, color: 'bg-gray-400' },
            ].map((item) => (
              <div key={item.platform}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{item.platform}</span>
                  <span className="text-gray-600">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
        <div className="space-y-3">
          {[
            { action: 'New episode published', time: '2 hours ago', type: 'success' },
            { action: 'Clip reached 10K views', time: '5 hours ago', type: 'info' },
            { action: 'Sponsor campaign started', time: '1 day ago', type: 'warning' },
            { action: 'Episode hit 5K plays', time: '2 days ago', type: 'success' },
          ].map((activity, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className={`w-2 h-2 rounded-full ${
                activity.type === 'success' ? 'bg-green-500' :
                activity.type === 'info' ? 'bg-blue-500' : 'bg-yellow-500'
              }`}></div>
              <div className="flex-1">
                <p className="text-sm font-medium">{activity.action}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
