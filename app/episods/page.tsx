'use client';
import Footer from "@/components/Footer";

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Search } from 'lucide-react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Image from "next/image";

const page = () => {
  const loading = false; // Simulate loading state

  const filteredEpisodes = [
    {
      id: 1,
      slug: 'future-of-work',
      title: 'Episode 12: The Future of Work',
      description: 'Exploring how remote work is shaping the future of business and employee lifestyles.',
      publish_date: '2023-08-15',
      duration: 1800,
      thumbnail_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Remote_Work.jpg'
    },
    {
      id: 2,
      slug: 'ai-in-daily-life',
      title: 'Episode 15: How AI is Changing the World',
      description: 'A deep dive into the impact of artificial intelligence on various industries and daily life.',
      publish_date: '2023-09-10',
      duration: 2400,
      thumbnail_url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Artificial_Intelligence.jpg'
    },
    {
      id: 3,
      slug: 'creator-balance',
      title: 'Episode 18: The Creator Economy',
      description: 'Discussing the challenges and opportunities in the growing creator economy.',
      publish_date: '2023-10-05', 
      duration: 2100,
      thumbnail_url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Content_Creator.jpg'
    },
    {
      id: 4,
      slug: 'marketing-for-podcasters',
      title: 'Episode 20: Growth Marketing 101',
      description: 'Essential marketing strategies for podcasters to grow their audience and engagement.',
      publish_date: '2023-11-01',
      duration: 1500,
      thumbnail_url: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Digital_Marketing.jpg'
    }
  ];
    return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-16">
        <section className="bg-gradient-to-br from-black to-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4">
              All <span className="text-yellow-400">Episodes</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {filteredEpisodes.length} episodes of business wisdom and startup insights
            </p>

            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search episodes..."

                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="animate-pulse">
                    <div className="bg-gray-200 h-48 rounded-t-lg"></div>
                    <div className="p-6">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : filteredEpisodes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEpisodes.map((episode) => (
                  <Link key={episode.id} href={`/episodes/${episode.slug}`}>
                    <Card className="group hover:shadow-xl transition-all cursor-pointer overflow-hidden h-full">
                      <div className="relative h-48 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center overflow-hidden">
                        {episode.thumbnail_url ? (
                          <Image
                            src={episode.thumbnail_url}
                            alt={episode.title}
                            className="w-full h-full object-cover"
                            width={400}
                            height={200}
                          />
                        ) : (
                          <Play className="h-16 w-16 text-black/30" />
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="bg-yellow-400 rounded-full p-4 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all">
                            <Play className="h-6 w-6 text-black" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="text-xs">
                            {new Date(episode.publish_date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </Badge>
                          {episode.duration > 0 && (
                            <div className="flex items-center text-xs text-gray-500">
                              <Clock className="h-3 w-3 mr-1" />
                              {episode.duration}
                            </div>
                          )}
                        </div>
                        <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-600 transition-colors line-clamp-2">
                          {episode.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {episode.description}
                        </p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No episodes found matching your search.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default page