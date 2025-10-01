'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus } from 'lucide-react';

export default function ProjectsPage() {
 

  const statuses = ['todo', 'recording', 'editing', 'published', 'promoted'];


 
  const loading = false;

  const projects = [
    {
      id: 1,
      title: 'Launch Episode 10',
      status: 'published',
      notes: 'Finalize editing and publish the episode on all platforms.',
      due_date: '2023-10-15',
    },
    {
      id: 2,
      title: 'Record Interview with Jane',
      status: 'recording',
      notes: 'Prepare questions and record the interview.',
      due_date: '2023-10-10',
    },
    {
      id: 3,
      title: 'Edit Episode 9',
      status: 'editing',
      notes: 'Edit the audio and add intro/outro music.',
      due_date: '2023-10-12',
    },
    {
      id: 4,
      title: 'Promote Episode 8',
      status: 'promoted',
      notes: 'Share on social media and send newsletter.',
      due_date: '2023-10-05',
    },
    {
      id: 5,
      title: 'Plan Episode 11',
      status: 'todo',
      notes: 'Brainstorm topics and guests for the next episode.',
      due_date: null,
    },
    {
      id: 6,
      title: 'Record Episode 11',
      status: 'todo',
      notes: 'Schedule recording session and prepare equipment.',
      due_date: null,
    }
  ];

  function getProjectsByStatus(status: string) {
    return projects.filter((project) => project.status === status);
  }

  function getStatusColor(status: string) {
    const colors: Record<string, string> = {
      todo: 'bg-gray-200 text-gray-800',
      recording: 'bg-blue-100 text-blue-800',
      editing: 'bg-yellow-100 text-yellow-800',
      published: 'bg-green-100 text-green-800',
      promoted: 'bg-purple-100 text-purple-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Projects</h1>
          <p className="text-gray-600">Track episode workflow and tasks</p>
        </div>
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
          <Plus className="mr-2 h-5 w-5" />
          New Project
        </Button>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {statuses.map((status) => (
            <Card key={status} className="p-4">
              <div className="h-6 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-2">
                <div className="h-20 bg-gray-100 rounded"></div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {statuses.map((status) => {
            const statusProjects = getProjectsByStatus(status);
            return (
              <div key={status}>
                <div className="mb-4">
                  <h3 className="font-bold text-sm uppercase text-gray-600 mb-1">
                    {status.replace('_', ' ')}
                  </h3>
                  <Badge className={getStatusColor(status)}>{statusProjects.length}</Badge>
                </div>
                <div className="space-y-3">
                  {statusProjects.map((project) => (
                    <Card key={project.id} className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                      <h4 className="font-semibold text-sm mb-2">{project.title}</h4>
                      <p className="text-xs text-gray-600 line-clamp-2">{project.notes}</p>
                      {project.due_date && (
                        <p className="text-xs text-gray-500 mt-2">
                          Due: {new Date(project.due_date).toLocaleDateString()}
                        </p>
                      )}
                    </Card>
                  ))}
                  {statusProjects.length === 0 && (
                    <Card className="p-4 bg-gray-50 border-dashed">
                      <p className="text-xs text-gray-400 text-center">No projects</p>
                    </Card>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
