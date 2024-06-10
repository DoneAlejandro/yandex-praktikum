import dns from 'dns';
import { defineConfig } from 'vite';

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
	server: {
		host: 'localhost',
		port: 3000,
	},
});