
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
import { Textarea } from '@/components/ui/textarea';
import { Plus, CreditCard as Edit, Trash2, Search, User, Twitter, Linkedin, Globe } from 'lucide-react';
import Image from 'next/image';

export default function GuestsManagerPage() {

  const editingGuest = false;
  const loading = false;
  const searchQuery = '';
  const filteredGuests = [
    {
      id: 1,
      name: 'John Doe',
      bio: 'A seasoned podcaster with over 10 years of experience.',
      photo_url: '',
      twitter: 'johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      website: 'https://johndoe.com',
      internal_notes: 'Loves discussing technology and innovation.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      bio: 'An expert in digital marketing and social media strategies.',
      photo_url: '',
      twitter: 'janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
      website: 'https://janesmith.com',
      internal_notes: 'Available for interviews on Mondays and Wednesdays.',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      bio: 'A tech entrepreneur and startup advisor.',
      photo_url: '',
      twitter: 'alicejohnson',
      linkedin: 'https://linkedin.com/in/alicejohnson',
      website: 'https://alicejohnson.com',
      internal_notes: 'Interested in discussing AI and machine learning.',
    },

  ];





  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Guests</h1>
          <p className="text-gray-600">Manage guest information and contacts</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
              <Plus className="mr-2 h-5 w-5" />
              Add Guest
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingGuest ? 'Edit Guest' : 'Add Guest'}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                
                  placeholder="Guest name"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="bio">Biography</Label>
                <Textarea
                  id="bio"
               
                  placeholder="Guest bio"
                  rows={4}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="photo_url">Photo URL</Label>
                <Input
                  id="photo_url"
        
                  placeholder="https://..."
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="twitter">Twitter Handle</Label>
                <Input
                  id="twitter"
                  placeholder="username (without @)"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="linkedin">LinkedIn URL</Label>
                <Input
                  id="linkedin"
                  placeholder="https://linkedin.com/in/..."
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  placeholder="https://..."
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="internal_notes">Internal Notes (Private)</Label>
                <Textarea
                  id="internal_notes"

                  placeholder="Private notes for team..."
                  rows={3}
                  className="mt-2"
                />
              </div>
              <div className="flex gap-2 pt-4">
                <Button  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                  {editingGuest ? 'Update' : 'Add'} Guest
                </Button>
                <Button variant="outline" >
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
            placeholder="Search guests..."
            value={searchQuery}
          
            className="pl-10"
          />
        </div>
      </Card>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-6 animate-pulse">
              <div className="h-16 w-16 bg-gray-200 rounded-full mb-4"></div>
              <div className="h-5 bg-gray-200 rounded w-2/3 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </Card>
          ))}
        </div>
      ) : filteredGuests.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuests.map((guest) => (
            <Card key={guest.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center flex-shrink-0">
                    {guest.photo_url ? (
                      <Image src={guest.photo_url} alt={guest.name} className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <User className="h-8 w-8 text-black" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg truncate">{guest.name}</h3>
                  </div>
                </div>
                <div className="flex gap-1 ml-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Button>
                </div>
              </div>

              {guest.bio && <p className="text-sm text-gray-600 mb-4 line-clamp-3">{guest.bio}</p>}

              <div className="flex gap-2">
                {guest.twitter && (
                  <a
                    href={`https://twitter.com/${guest.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Twitter className="h-4 w-4 text-gray-600" />
                  </a>
                )}
                {guest.linkedin && (
                  <a
                    href={guest.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-gray-600" />
                  </a>
                )}
                {guest.website && (
                  <a
                    href={guest.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Globe className="h-4 w-4 text-gray-600" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-12 text-center">
          <p className="text-gray-600">No guests found. Add your first guest!</p>
        </Card>
      )}
    </div>
  );
}
