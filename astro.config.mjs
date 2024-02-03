import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  adapter: netlify({
    imageCDN: true,
    cacheOnDemandPages: true,
  }),
  prefetch: {
    defaultStrategy: 'hover',
  },
  output: 'server',
});
