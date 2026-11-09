
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-cloudflare';

export default defineConfig({
    plugins: [
        tailwindcss(),
        sveltekit({
            adapter: adapter(),
            compilerOptions: {
                runes: ({ filename }) =>
                    filename.split(/[/**\\**]/).includes('node_modules')
                        ? undefined
                        : true
            }
        })
    ]
});
