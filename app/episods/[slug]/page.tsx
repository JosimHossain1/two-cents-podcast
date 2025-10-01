'use client';


import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Clock, Youtube, Music, Apple, Share2, User } from 'lucide-react';
import Link from 'next/link';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EpisodeDetailPage() {
  const loading = false; // Simulate loading state

  const episode = {
    id: 2,
    slug: 'ai-in-daily-life',
    title: 'Episode 15: How AI is Changing the World',
    description: 'A deep dive into the impact of artificial intelligence on various industries and daily life.',
    publish_date: '2023-09-10',
    duration: 2400,
    thumbnail_url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Artificial_Intelligence.jpg',
    youtube_url: 'https://www.youtube.com/watch?v=efgh5678',
    audio_url: 'https://open.spotify.com/episode/efgh5678',
    transcript: `In this episode, we explore the transformative power of artificial intelligence (AI) and its growing influence on our daily lives. From smart assistants to advanced data analytics, AI is reshaping industries and creating new opportunities. We discuss the ethical considerations surrounding AI, its potential to drive innovation, and how individuals and businesses can adapt to this rapidly evolving technology. Join us as we delve into the fascinating world of AI and its implications for the future.`,
  };
  const guests = [
    {
      id: 1,
      name: 'Dr. Jane Smith',
      bio: 'AI Researcher and Professor at Tech University',
      photo_url: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Dr_Jane_Smith.jpg',
      twitter: 'drjanesmith',
      website: 'https://www.janesmithai.com',
    },
  ];
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!episode) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h1 className="text-3xl font-bold mb-4">Episode Not Found</h1>
            <Link href="/episodes">
              <Button>View All Episodes</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-16">
        <section className="bg-gradient-to-br from-black to-gray-900 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/episodes" className="text-yellow-400 hover:text-yellow-300 mb-4 inline-block">
              ← Back to Episodes
            </Link>

            <div className="flex gap-3 mb-4">
              <Badge variant="secondary">
                {new Date(episode.publish_date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </Badge>
              {episode.duration > 0 && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {episode.duration}
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{episode.title}</h1>

            {episode.description && (
              <p className="text-xl text-gray-300 mb-8">{episode.description}</p>
            )}

            <div className="flex flex-wrap gap-4">
              {episode.youtube_url && (
                <a href={episode.youtube_url} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Youtube className="mr-2 h-5 w-5" />
                    Watch on YouTube
                  </Button>
                </a>
              )}
              {episode.audio_url && (
                <>
                  <a href={episode.audio_url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-yellow-400 text-yellow-400">
                      <Music className="mr-2 h-5 w-5" />
                      Listen on Spotify
                    </Button>
                  </a>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    <Apple className="mr-2 h-5 w-5" />
                    Apple Podcasts
                  </Button>
                </>
              )}
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Share2 className="mr-2 h-5 w-5" />
                Share
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="notes" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="notes">Show Notes</TabsTrigger>
                <TabsTrigger value="guests">Guests</TabsTrigger>
                <TabsTrigger value="clips">Clips ({episode.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="notes" className="mt-6">
                <Card className="p-8">
                  {episode.transcript ? (
                    <div className="prose max-w-none">
                      <div className="whitespace-pre-wrap">{episode.transcript}</div>
                    </div>
                  ) : (
                    <p className="text-gray-600 text-center py-8">
                      Show notes and transcript coming soon...
                    </p>
                  )}
                </Card>
              </TabsContent>

              <TabsContent value="guests" className="mt-6">
                {guests.length > 0 ? (
                  <div className="grid gap-6">
                    {guests.map((guest) => (
                      <Card key={guest.id} className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center flex-shrink-0">
                            {guest.photo_url ? (
                              <Image
                                src={guest.photo_url}
                                alt={guest.name}
                                className="w-full h-full rounded-full object-cover"
                                width={64}
                                height={64}
                              />
                            ) : (
                              <User className="h-8 w-8 text-black" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-xl mb-2">{guest.name}</h3>
                            {guest.bio && <p className="text-gray-600 mb-3">{guest.bio}</p>}
                            <div className="flex gap-3">
                              {guest.twitter && (
                                <a
                                  href={`https://twitter.com/${guest.twitter}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-yellow-600 hover:text-yellow-700"
                                >
                                  @{guest.twitter}
                                </a>
                              )}
                              {guest.website && (
                                <a
                                  href={guest.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-yellow-600 hover:text-yellow-700"
                                >
                                  Website
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="p-8 text-center text-gray-600">
                    No guest information available
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="clips" className="mt-6">
                {episode.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {episode.map((clip) => (
                      <Card key={clip.id} className="p-4 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-yellow-400 p-2 rounded-full">
                            <Play className="h-4 w-4 text-black" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{clip.title}</h4>
                            <p className="text-xs text-gray-500">
                              {Math.floor(clip.start_time / 60)}:{(clip.start_time % 60).toString().padStart(2, '0')} -{' '}
                              {Math.floor(clip.end_time / 60)}:{(clip.end_time % 60).toString().padStart(2, '0')}
                            </p>
                          </div>
                        </div>
                        {clip.youtube_url && (
                          <a href={clip.youtube_url} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="outline" className="w-full">
                              <Youtube className="mr-2 h-4 w-4" />
                              Watch Clip
                            </Button>
                          </a>
                        )}
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="p-8 text-center text-gray-600">
                    No clips available yet
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
