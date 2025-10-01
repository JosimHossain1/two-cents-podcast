import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images : {
    remotePatterns : [
      {
        protocol : 'https',
        hostname : 'upload.wikimedia.org',
        port : '',
        pathname : '/wikipedia/commons/**'
      },
      {
        protocol : 'https',
        hostname : 'd33wubrfki0l68.cloudfront.net',
        port : '',
        pathname : '/**'
      }
    ]

    
  }
  /* config options here */
};

export default nextConfig;
