// @ts-nocheck

import { defineConfig, loadEnv } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import viteReact from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'

import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return ({
    optimizeDeps: {
      include: ['@common/contracts'],
    },
    build: {
      commonjsOptions: {
        include: [/packages/, /node_modules/],
      },
    },
    server: {
      port: env.VITE_PORT ? Number(env.VITE_PORT) : 3000
    },
    plugins: [
      devtools(),
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: true,
      }),
      viteReact(),
      tailwindcss(),
      ],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
      },
    });
});
