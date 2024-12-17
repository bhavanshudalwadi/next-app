import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ]
  },
  // output: "export", // To generate static html
  redirects: async () => {
    return [
      {
        source: '/sample',
        destination: '/',
        permanent: false
      },
      {
        source: '/about/owner',
        destination: '/about',
        permanent: false
      },
    ]
  }
};

export default nextConfig;
