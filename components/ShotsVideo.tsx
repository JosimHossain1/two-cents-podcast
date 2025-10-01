import React, { useState }from 'react'
import { Card } from './ui/card';
import { Badge, Eye, Play, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

const ShotsVideo = () => {
    const [loading, setLoading] = useState(false);

    const clips = [
  {
    "id": 1,
    "title": "The Future of Remote Work",
    "start_time": 120,
    "end_time": 320,
    "views": 2450,
    "youtube_url": "https://www.youtube.com/watch?v=abcd1234",
    "episodes": {
      "slug": "future-of-work",
      "title": "Episode 12: The Future of Work"
    }
  },
  {
    "id": 2,
    "title": "AI in Everyday Life",
    "start_time": 45,
    "end_time": 200,
    "views": 1890,
    "youtube_url": "https://www.youtube.com/watch?v=efgh5678",
    "episodes": {
      "slug": "ai-in-daily-life",
      "title": "Episode 15: How AI is Changing the World"
    }
  },
  {
    "id": 3,
    "title": "Finding Balance as a Creator",
    "start_time": 300,
    "end_time": 540,
    "views": 720,
    "youtube_url": "https://www.youtube.com/watch?v=ijkl9101",
    "episodes": {
      "slug": "creator-balance",
      "title": "Episode 18: The Creator Economy"
    }
  },
  {
    "id": 4,
    "title": "Marketing Hacks for Podcasters",
    "start_time": 80,
    "end_time": 260,
    "views": 3400,
    "youtube_url": "https://www.youtube.com/watch?v=mnop1122",
    "episodes": {
      "slug": "marketing-for-podcasters",
      "title": "Episode 20: Growth Marketing 101"
    }
  },
  {
    "id": 5,
    "title": "Dealing with Creative Burnout",
    "start_time": 150,
    "end_time": 400,
    "views": 950,
    "youtube_url": "https://www.youtube.com/watch?v=qrst3344",
    "episodes": {
      "slug": "creative-burnout",
      "title": "Episode 22: Mental Health for Creators"
    }
  }
]


  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-16">
        <section className="bg-gradient-to-br from-black to-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4">
              Best <span className="text-yellow-400">Clips</span>
            </h1>
            <p className="text-xl text-gray-300">
              Quick hits of wisdom from our conversations
            </p>
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
            ) : clips.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {clips.map((clip) => (
                  <Card key={clip.id} className="group hover:shadow-xl transition-all overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                      <Play className="h-16 w-16 text-black/30" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="bg-yellow-400 rounded-full p-4 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all">
                          <Play className="h-6 w-6 text-black" />
                        </div>
                      </div>
                     
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">{clip.title}</h3>
                      <Link href={`/episodes/${clip.episodes?.slug}`} className="text-sm text-gray-600 hover:text-yellow-600 mb-3 block">
                        From: {clip.episodes?.title}
                      </Link>
                      <div className="flex items-center justify-between">
                        {clip.views > 0 && (
                          <div className="flex items-center text-sm text-gray-500">
                            <Eye className="h-4 w-4 mr-1" />
                            {clip.views.toLocaleString()} views
                          </div>
                        )}
                        {clip.youtube_url && (
                          <a href={clip.youtube_url} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="outline">
                              <Youtube className="mr-2 h-4 w-4" />
                              Watch
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No clips available yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </main>

    </div>
  );
}

export default ShotsVideo