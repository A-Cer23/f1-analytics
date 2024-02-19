import { setupDevBindings } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {};

if (process.env.NODE_ENV === 'development') {
  await setupDevBindings({
    bindings: {
      D1DB: {
        type: 'd1',
        databaseId: 'D1DB'
      },
    },
  });
}

export default nextConfig;
