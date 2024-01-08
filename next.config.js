/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_NEXTAPP_URL: "https://vendor-repository.vercel.app/",
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/Shanki200801/vendor-repository",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
