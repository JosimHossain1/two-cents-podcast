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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, CreditCard as Edit, Trash2, Search, Briefcase } from 'lucide-react';
import Image from 'next/image';

export default function SponsorsManagerPage() {

  const loading = false;
  const editingSponsor = false;

  const filteredSponsors = [
    {
      id: 1,
      company_name: 'Tech Corp',
      logo_url: '',
      website: 'https://techcorp.com',
      contact_email: 'contact@techcorp.com',
      ad_copy: 'Leading the future of technology.',
      budget: 5000,
      contract_status: 'active',
    },
    {
      id: 2,
      company_name: 'Health Plus',
      logo_url: '',
      website: 'https://healthplus.com',
      contact_email: 'contact@healthplus.com',
      ad_copy: 'Your partner in health and wellness.',
      budget: 3000,
      contract_status: 'pending',
    },
    {
      id: 3,
      company_name: 'Eco Solutions',
      logo_url: '',
      website: 'https://ecosolutions.com',
      contact_email: 'contact@ecosolutions.com',
      ad_copy: 'Sustainable solutions for a better tomorrow.',
      budget: 4000,
      contract_status: 'completed',
    },

  ];
  

  function getStatusColor(status: string) {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Sponsors</h1>
          <p className="text-gray-600">Manage sponsorships and partnerships</p>
        </div>
        <Dialog >
          <DialogTrigger asChild>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
              <Plus className="mr-2 h-5 w-5" />
              Add Sponsor
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingSponsor ? 'Edit Sponsor' : 'Add Sponsor'}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="company_name">Company Name *</Label>
                <Input
                  id="company_name"
                 
                  placeholder="Company name"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="logo_url">Logo URL</Label>
                <Input
                  id="logo_url"
                 
                  placeholder="https://..."
                  className="mt-2"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    placeholder="https://..."
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="contact_email">Contact Email</Label>
                  <Input
                    id="contact_email"
                    type="email"
       
                    placeholder="contact@company.com"
                    className="mt-2"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="ad_copy">Ad Copy / Message</Label>
                <Textarea
                  id="ad_copy"

                  placeholder="Sponsorship message..."
                  rows={3}
                  className="mt-2"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="budget">Budget ($)</Label>
                  <Input
                    id="budget"
                    type="number"
                    placeholder="5000"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="contract_status">Contract Status</Label>
                  <Select
                  
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <Button  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                  {editingSponsor ? 'Update' : 'Add'} Sponsor
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
            placeholder="Search sponsors..."
            className="pl-10"
          />
        </div>
      </Card>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-6 animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </Card>
          ))}
        </div>
      ) : filteredSponsors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSponsors.map((sponsor) => (
            <Card key={sponsor.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    {sponsor.logo_url ? (
                      <Image src={sponsor.logo_url} alt={sponsor.company_name} className="w-full h-full object-contain rounded-lg" />
                    ) : (
                      <Briefcase className="h-8 w-8 text-black" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-xl truncate">{sponsor.company_name}</h3>
                    <Badge className={getStatusColor(sponsor.contract_status)}>{sponsor.contract_status}</Badge>
                  </div>
                </div>
                <div className="flex gap-1 ml-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" >
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Button>
                </div>
              </div>

              {sponsor.ad_copy && <p className="text-sm text-gray-600 mb-3 line-clamp-2">{sponsor.ad_copy}</p>}

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Budget: ${sponsor.budget.toLocaleString()}</span>
                {sponsor.website && (
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:text-yellow-700"
                  >
                    Visit Website →
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-12 text-center">
          <p className="text-gray-600">No sponsors found. Add your first sponsor!</p>
        </Card>
      )}
    </div>
  );
}
