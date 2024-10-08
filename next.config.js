/** @type {import('next').NextConfig} */

const nextConfig = {
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/home",
        // destination: "/auth/login",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
