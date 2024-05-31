/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: '"cdn.imagin.studio"',
        port: "",
        pathname: "/**",
      },
    ],
    // domains: ["cdn.imagin.studio"],
  },
};

export default nextConfig;
