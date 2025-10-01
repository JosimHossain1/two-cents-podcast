import React from 'react';
import { Card } from './ui/card';
import { Mail, MessageSquare, Mic2 } from 'lucide-react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <main className='pt-16'>
        <section className='bg-gradient-to-br from-black to-gray-900 text-white py-16'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h1 className='text-5xl font-bold mb-4'>
              Get in <span className='text-yellow-400'>Touch</span>
            </h1>
            <p className='text-xl text-gray-300'>
              Have a question, feedback, or want to collaborate? We&apos;d love
              to hear from you.
            </p>
          </div>
        </section>

        <section className='py-12'>
          <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
              <Card className='p-6 text-center'>
                <div className='bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto'>
                  <Mic2 className='h-6 w-6 text-black' />
                </div>
                <h3 className='text-lg font-bold mb-2'>Be a Guest</h3>
                <p className='text-gray-600 text-sm'>
                  Share your story and insights with our audience
                </p>
              </Card>

              <Card className='p-6 text-center'>
                <div className='bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto'>
                  <MessageSquare className='h-6 w-6 text-black' />
                </div>
                <h3 className='text-lg font-bold mb-2'>Partnership</h3>
                <p className='text-gray-600 text-sm'>
                  Explore sponsorship and collaboration opportunities
                </p>
              </Card>

              <Card className='p-6 text-center'>
                <div className='bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto'>
                  <Mail className='h-6 w-6 text-black' />
                </div>
                <h3 className='text-lg font-bold mb-2'>General Inquiry</h3>
                <p className='text-gray-600 text-sm'>
                  Questions, feedback, or just want to say hi
                </p>
              </Card>
            </div>

            <Card className='p-8 max-w-2xl mx-auto'>
              <form>
                <div className='space-y-6'>
                  <div>
                    <Label htmlFor='name'>Name</Label>
                    <Input
                      id='name'
                      placeholder='Your name'
                      required
                      className='mt-2'
                    />
                  </div>

                  <div>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='your@email.com'
                      required
                      className='mt-2'
                    />
                  </div>

                  <div>
                    <Label htmlFor='subject'>Subject</Label>
                    <Input
                      id='subject'
                      placeholder="What's this about?"
                      required
                      className='mt-2'
                    />
                  </div>

                  <div>
                    <Label htmlFor='message'>Message</Label>
                    <Textarea
                      id='message'
                      placeholder='Tell us more...'
                      required
                      rows={6}
                      className='mt-2'
                    />
                  </div>

                  <Button
                    type='submit'
                    className='w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold'
                    size='lg'
                  >
                    Send Message
                  </Button>

                  <div className='bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center'>
                    Thanks for reaching out! We&apos;ll get back to you soon.
                  </div>
                </div>
              </form>
            </Card>

            <div className='mt-12 text-center text-gray-600'>
              <p className='mb-2'>Prefer email? Reach us directly at:</p>
              <a
                href='mailto:hello@2centspodcast.com'
                className='text-yellow-600 hover:text-yellow-700 font-medium text-lg'
              >
                businesswith2cents@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
