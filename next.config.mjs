/** @type {import('next').NextConfig} */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const nextConfig = {
    images: {
      remotePatterns: [
        { protocol: "https", hostname: "assets.aceternity.com" },
        { protocol: "https", hostname: "aceternity.com" },
        { protocol: "https", hostname: "pbs.twimg.com" },
      ],
    },
  };
  

  export default nextConfig;
