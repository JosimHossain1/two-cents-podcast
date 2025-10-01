'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, CreditCard as Edit, Trash2, Search, Play } from 'lucide-react';

export default function ClipsManagerPage() {
 
  const editingClip = false;
  const loading = false;

  const episodes = [
    { id: 1, title: 'Episode 1: Introduction to Podcasting' },
    { id: 2, title: 'Episode 2: Recording Techniques' },
    { id: 3, title: 'Episode 3: Editing Your Podcast' },

  ];

  const filteredClips = [
    {
      id: 1,
      title: 'Intro Highlight',
      start_time: 30,
      end_time: 90,
      youtube_url: 'https://youtube.com/clip1',
      views: 1500,
      episodes: { title: 'Episode 1: Introduction to Podcasting' },
    },
    {
      id: 2,
      title: 'Best Tips',
      start_time: 120,
      end_time: 180,
      youtube_url: 'https://youtube.com/clip2',
      views: 2500,
      episodes: { title: 'Episode 2: Recording Techniques' },
    },
    {
      id: 3,
      title: 'Funny Moment',
      start_time: 200,
      end_time: 260,
      youtube_url: 'https://youtube.com/clip3',
      views: 3000,
      episodes: { title: 'Episode 3: Editing Your Podcast' },
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Clips</h1>
          <p className="text-gray-600">Manage episode highlights and short clips</p>
        </div>
        <Dialog >
          <DialogTrigger asChild>
            <Button  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
              <Plus className="mr-2 h-5 w-5" />
              New Clip
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{editingClip ? 'Edit Clip' : 'Create Clip'}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="episode_id">Episode *</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select episode" />
                  </SelectTrigger>
                  <SelectContent>
                    {episodes.map((ep) => (
                      <SelectItem key={ep.id} value={ep.id.toString()}>
                        {ep.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="title">Clip Title *</Label>
                <Input
                  id="title"
     
                  placeholder="Clip title"
                  className="mt-2"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="start_time">Start Time (seconds)</Label>
                  <Input
                    id="start_time"
                    type="number"
                    className="mt-2"
                  />
                  <p className="text-xs text-gray-500 mt-1"></p>
                </div>
                <div>
                  <Label htmlFor="end_time">End Time (seconds)</Label>
                  <Input
                    id="end_time"
                    type="number"

                    className="mt-2"
                  />
                  <p className="text-xs text-gray-500 mt-1"></p>
                </div>
              </div>
              <div>
                <Label htmlFor="youtube_url">YouTube URL</Label>
                <Input
                  id="youtube_url"
                  placeholder="https://youtube.com/..."
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="views">Views</Label>
                <Input
                  id="views"
                  type="number"
                  className="mt-2"
                />
              </div>
              <div className="flex gap-2 pt-4">
                <Button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                  {editingClip ? 'Update' : 'Create'} Clip
                </Button>
                <Button variant="outline">
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="p-6 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search clips..."
            className="pl-10"
          />
        </div>
      </Card>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-6 animate-pulse">
              <div className="h-32 bg-gray-200 rounded mb-4"></div>
              <div className="h-5 bg-gray-200 rounded w-3/4"></div>
            </Card>
          ))}
        </div>
      ) : filteredClips.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClips.map((clip) => (
            <Card key={clip.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 flex items-center justify-center">
                <Play className="h-12 w-12 text-black/30" />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2 line-clamp-2">{clip.title}</h3>
                <p className="text-sm text-gray-600 mb-2">From: {clip.episodes?.title}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>
                    Start: 
                    </span>
                  <span>
                    Duration: 
                  </span>
                </div>
                {clip.views > 0 && (
                  <p className="text-xs text-gray-500 mb-3">{clip.views.toLocaleString()} views</p>
                )}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" >
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-12 text-center">
          <p className="text-gray-600">No clips found. Create your first clip!</p>
        </Card>
      )}
    </div>
  );
}
