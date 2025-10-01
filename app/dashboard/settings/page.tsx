'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Bell, Lock, Globe } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-4 mb-8">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="general">General</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card className="p-6 max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                <User className="h-10 w-10 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Profile Picture</h3>
                <Button variant="outline" size="sm" className="mt-2">Change Photo</Button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Admin User" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="admin@2centspodcast.com" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Input id="role" defaultValue="Administrator" disabled className="mt-2" />
              </div>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                Save Changes
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="p-6 max-w-2xl">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notification Preferences
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">New Episode Published</p>
                  <p className="text-sm text-gray-600">Get notified when an episode goes live</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Guest Invitations</p>
                  <p className="text-sm text-gray-600">Notifications about guest responses</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Sponsor Updates</p>
                  <p className="text-sm text-gray-600">Updates about sponsorship campaigns</p>
                </div>
                <input type="checkbox" className="w-5 h-5" />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="p-6 max-w-2xl">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Security Settings
            </h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" className="mt-2" />
              </div>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                Update Password
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="general">
          <Card className="p-6 max-w-2xl">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Globe className="h-5 w-5" />
              General Settings
            </h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="podcast-name">Podcast Name</Label>
                <Input id="podcast-name" defaultValue="2 Cents Podcast" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="website-url">Website URL</Label>
                <Input id="website-url" defaultValue="https://2centspodcast.com" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="timezone">Timezone</Label>
                <Input id="timezone" defaultValue="America/New_York" className="mt-2" />
              </div>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                Save Settings
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
