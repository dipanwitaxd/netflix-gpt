/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static exports
  // Optional: Add basePath if deploying to a subdirectory
  // basePath: '/your-subdirectory',
  // Optional: Add images configuration if using next/image
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
