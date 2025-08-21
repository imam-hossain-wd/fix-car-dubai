/** @type {import('next').NextConfig} */
const nextConfig = {

     eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'img.freepik.com',
      'i.ibb.co', 
      'res.cloudinary.com',
      '/www.freepik.com'
      // Add any other domains you need here
    ],
  },
  // You can add other Next.js config options here if needed
};

export default nextConfig;
