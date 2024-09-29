/** @type {import('next').NextConfig} */

const nextConfig = {
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/labs/home",
        // destination: "/auth/login",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
