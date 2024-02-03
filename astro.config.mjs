import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

import tunnel from 'astro-tunnel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), tunnel()],
  adapter: netlify({
    imageCDN: true,
    cacheOnDemandPages: true,
  }),
  prefetch: {
    defaultStrategy: 'hover',
  },
  output: 'server',
});
