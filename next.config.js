const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["tenor.com", "aceternity.com"],
    // Allow images from all domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.example.com",
        port: "",
      },
    ],
  },
};
module.exports = withContentlayer(nextConfig);
