// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: replace with the real production URL when domain is finalized
const SITE_URL = 'https://optimal.lat';

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	integrations: [react(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'viewport',
	},
});
