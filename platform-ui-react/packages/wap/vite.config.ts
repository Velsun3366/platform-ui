import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default defineConfig(async ({ command, mode }) => {
    const env = loadEnv(mode, process.cwd());
    console.log(`command - ${command}. mode - ${mode}.`);
    console.log(env);
    const config = defineConfig({
        base: env.VITE_APP_BASE ?? '/',
        server: {
            port: 8083,
        },
        resolve: {
            alias: {
                '~antd': 'antd',
                '~antd-mobile': 'antd-mobile',
                '~normalize.css': 'normalize.css',
                '~video.js': 'video.js',
            },
        },
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                },
            },
        },
        plugins: [react(), tsconfigPaths()],
    });
    if (command === 'build' && mode === 'watch') {
        return {
            ...config,
            build: {
                watch: {},
                outDir: env.VITE_APP_DIST ?? 'dist',
            },
        };
    }
    return config;
});
