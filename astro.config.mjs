// @ts-check
import { defineConfig } from 'astro/config';


import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rafaelm71.github.io',
  base: 'my-repo',
  vite: {
    plugins: [tailwindcss()]
  }

  
});