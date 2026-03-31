// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Guille37778.github.io',
  base: '/Digitals-Solutions/',
  vite: {
    plugins: [tailwindcss()]
  }
});