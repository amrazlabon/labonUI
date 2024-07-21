/** @type {import('next').NextConfig} */

const nextConfig = {
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/acheck/profile",
        // destination: "/auth/login",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
