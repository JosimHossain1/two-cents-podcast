'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, CreditCard as Edit, Trash2, Search, Calendar } from 'lucide-react';

export default function EpisodesManagerPage() {


const editingEpisode = true;
const loading = false;

const filteredEpisodes = [
  {
    id: 1,
    title: 'Episode 1: Introduction to Podcasting',
    description: 'An introduction to the world of podcasting.',
    status: 'published',
    publish_date: '2023-01-15T10:00:00Z',
    duration: 1800,
  },
  {
    id: 2,
    title: 'Episode 2: Recording Techniques',
    description: 'Tips and tricks for recording high-quality audio.',
    status: 'draft',
    publish_date: null,
    duration: 2400,
  },
  {
    id: 3,
    title: 'Episode 3: Editing Your Podcast',
    description: 'A guide to editing your podcast episodes effectively.',
    status: 'scheduled',
    publish_date: '2023-02-01T10:00:00Z',
    duration: 2100,
  },
];


  function getStatusColor(status: string) {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Episodes</h1>
          <p className="text-gray-600">Manage your podcast episodes</p>
        </div>
        <Dialog >
          <DialogTrigger asChild>
            <Button  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
              <Plus className="mr-2 h-5 w-5" />
              New Episode
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingEpisode ? 'Edit Episode' : 'New Episode'}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                
                  placeholder="Episode title"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
       
                  placeholder="episode-url-slug"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
               
                  placeholder="Episode description"
                  rows={3}
                  className="mt-2"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select >
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="duration">Duration (seconds)</Label>
                  <Input
                    id="duration"
                    type="number"
                 
                    className="mt-2"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="publish_date">Publish Date</Label>
                <Input
                  id="publish_date"
                  type="datetime-local"
                 
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="audio_url">Audio URL</Label>
                <Input
                  id="audio_url"
                 
                  placeholder="https://spotify.com/..."
                  className="mt-2"
                />
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
                <Label htmlFor="thumbnail_url">Thumbnail URL</Label>
                <Input
                  id="thumbnail_url"
               
                  placeholder="https://..."
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="transcript">Transcript / Show Notes</Label>
                <Textarea
                  id="transcript"
                
                  placeholder="Episode transcript or show notes..."
                  rows={6}
                  className="mt-2"
                />
              </div>
              <div className="flex gap-2 pt-4">
                <Button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                  {editingEpisode ? 'Update' : 'Create'} Episode
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
            placeholder="Search episodes..."
            className="pl-10"
          />
        </div>
      </Card>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-6 animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </Card>
          ))}
        </div>
      ) : filteredEpisodes.length > 0 ? (
        <div className="space-y-4">
          {filteredEpisodes.map((episode) => (
            <Card key={episode.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{episode.title}</h3>
                    <Badge className={getStatusColor(episode.status)}>{episode.status}</Badge>
                  </div>
                  <p className="text-gray-600 mb-3 line-clamp-2">{episode.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {episode.publish_date
                        ? new Date(episode.publish_date).toLocaleDateString()
                        : 'Not scheduled'}
                    </span>
                    {episode.duration > 0 && (
                      <span>
                        Duration: {Math.floor(episode.duration / 60)}m {episode.duration % 60}s
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-12 text-center">
          <p className="text-gray-600">No episodes found. Create your first episode!</p>
        </Card>
      )}
    </div>
  );
}
