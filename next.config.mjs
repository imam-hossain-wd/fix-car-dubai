/** @type {import('next').NextConfig} */


const nextConfig = {

  eslint: {
    ignoreDuringBuilds: true,
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'img.freepik.com',
      'i.ibb.co',
      'res.cloudinary.com',
      '/www.freepik.com',
      'images.pexels.com'
    ],
  },
};

export default nextConfig;
