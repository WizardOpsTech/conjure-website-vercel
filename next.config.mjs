/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GIT_COMMIT_REF: process.env.VERCEL_GIT_COMMIT_REF || '',
  },

  async headers() {
    const headers = [];

    // Prevent preview/staging from being indexed
    if (process.env.VERCEL_ENV !== 'production') {
      headers.push({
        source: '/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      });
    }

    // Security and trust headers for all environments
    headers.push({
      source: '/:path*',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    });

    return headers;
  },
};

export default nextConfig;
