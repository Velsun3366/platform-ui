import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { resolve } from 'path';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import Inspect from 'vite-plugin-inspect';

export default defineConfig(async ({ command, mode }) => {
    const env = loadEnv(mode, process.cwd());
    console.log(`command - ${command}. mode - ${mode}.`);
    console.log(env);
    return {
        resolve: {
            alias: {},
        },
        plugins: [
            vue(),
            tsconfigPaths(),
            AutoImport({
                imports: ['vue'],
                resolvers: [VantResolver(), IconsResolver()],
                dts: resolve(__dirname, 'src/types/auto-imports.d.ts'),
            }),
            Components({
                resolvers: [VantResolver(), IconsResolver()],
                dts: resolve(__dirname, 'src/types/components.d.ts'),
            }),
            Icons({
                autoInstall: true,
            }),
            Inspect(),
        ],
    };
});
