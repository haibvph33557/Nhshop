// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                category: resolve(__dirname, 'category.html'),
                productdetail: resolve(__dirname, 'product-detail.html')
            },
        },
    },
});
