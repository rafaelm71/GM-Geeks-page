// @ts-check
import { defineConfig } from 'astro/config';


import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://rafaelm71.github.io',
  base: 'GM-Geeks-page',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});