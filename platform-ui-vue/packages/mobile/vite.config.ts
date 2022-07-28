import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import Inspect from 'vite-plugin-inspect';

export default defineConfig(async ({ command, mode }) => {
    const env = loadEnv(mode, process.cwd());
    console.log(`command - ${command}. mode - ${mode}.`);
    console.log(env);
    return {
        resolve: {
            alias: {
                '~@ionic/vue': '@ionic/vue',
            },
        },
        plugins: [vue(), tsconfigPaths(), Inspect()],
    };
});
