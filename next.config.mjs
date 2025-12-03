/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "https://multikart-frontend-rest.vercel.app/",
    API_PROD_URL: "https://api.your.domain.com/api",
    storageURL: "https://api.your.domain.com",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.your.domain.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  // Removing custom CSS/SCSS configuration to use built-in support
  webpack: (config) => {
    // If additional custom loaders are necessary, keep those, but remove CSS/SCSS rules
    config.module.rules = config.module.rules.filter(
      (rule) =>
        !(
          rule.test &&
          (rule.test.toString().includes(".scss") ||
            rule.test.toString().includes(".css"))
        )
    );

    return config;
  },
};

export default nextConfig;
