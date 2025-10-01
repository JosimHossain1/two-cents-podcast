import React from 'react'
import { Card } from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, Target, TrendingUp, Users } from 'lucide-react';

const Sponsor = () => {

  const sponsors = [
  {
    "id": 1,
    "company_name": "Notion",
    "logo_url": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
    "ad_copy": "Organize your podcast ideas, guests, and projects with Notion. Work smarter, not harder.",
    "website": "https://www.notion.so"
  },
  {
    "id": 2,
    "company_name": "Fiverr",
    "logo_url": "https://upload.wikimedia.org/wikipedia/commons/8/89/Fiverr_Logo.svg",
    "ad_copy": "Find freelance experts to help with editing, design, and marketing. Fiverr makes scaling easy.",
    "website": "https://www.fiverr.com"
  },
  {
    "id": 3,
    "company_name": "Shure",
    "logo_url": "https://upload.wikimedia.org/wikipedia/commons/3/39/Shure_logo.svg",
    "ad_copy": "Trusted by podcasters worldwide — Shure microphones deliver studio-quality audio every time.",
    "website": "https://www.shure.com"
  },
  {
    "id": 4,
    "company_name": "Canva",
    "logo_url": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Canva_Logo.png",
    "ad_copy": "Create stunning episode thumbnails and social media graphics in minutes with Canva.",
    "website": "https://www.canva.com"
  },
  {
    "id": 5,
    "company_name": "Riverside.fm",
    "logo_url": "https://d33wubrfki0l68.cloudfront.net/9b5980d60/logo.png",
    "ad_copy": "Record studio-quality remote interviews straight from your browser.",
    "website": "https://riverside.fm"
  }
]


  return (

    <div className="min-h-screen bg-gray-50">

      <main className="pt-16">
        <section className="bg-gradient-to-br from-black to-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-4">
              Our <span className="text-yellow-400">Sponsors</span>
            </h1>
            <p className="text-xl text-gray-300">
              Supporting quality content and partnering with the best brands
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        

            {sponsors.length > 0 && (
              <>
                <h2 className="text-3xl font-bold mb-8">Current Partners</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {sponsors.map((sponsor) => (
                    <Card key={sponsor.id} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-4 mb-4">
                        {sponsor.logo_url ? (
                          <Image
                            src={sponsor.logo_url}
                            alt={sponsor.company_name}
                            className="w-12 h-12 object-contain"
                            width={48}
                            height={48}
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                            <Briefcase className="h-6 w-6 text-black" />
                          </div>
                        )}
                        <h3 className="font-bold text-lg">{sponsor.company_name}</h3>
                      </div>
                      {sponsor.ad_copy && (
                        <p className="text-gray-600 text-sm mb-4">{sponsor.ad_copy}</p>
                      )}
                      {sponsor.website && (
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-yellow-600 hover:text-yellow-700 text-sm font-medium"
                        >
                          Visit Website →
                        </a>
                      )}
                    </Card>
                  ))}
                </div>
              </>
            )}

                <Card className="p-8 mb-12 bg-gradient-to-br from-yellow-400 to-yellow-500">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold mb-4 text-black">Partner With Us</h2>
                <p className="text-black/80 mb-6 text-lg">
                  Reach thousands of engaged entrepreneurs, marketers, and business leaders who trust our
                  recommendations. Our audience is actively building and growing their businesses.
                </p>
                <Link href="#contact">
                  <Button size="lg" className="bg-black hover:bg-gray-900 text-yellow-400">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </Card>

          </div>
        </section>
      </main>

    </div>
  );
  
}

export default Sponsor