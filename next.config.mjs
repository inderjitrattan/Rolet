/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "https://aarkaytest.com/",
    API_PROD_URL: "https://api.aarkaytest.com/api",
    storageURL: "https://api.aarkaytest.com",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.aarkaytest.com",
      },
    ],
  },

  webpack: (config) => {
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
