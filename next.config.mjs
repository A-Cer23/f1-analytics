import { setupDevBindings } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {};

if (process.env.NODE_ENV === 'development') {
  await setupDevBindings({
    bindings: {
      D1DB: {
        type: 'd1',
        databaseId: '27bef208-ee78-46dd-993d-d74802cea736'
      },
    },
  });
}

export default nextConfig;
