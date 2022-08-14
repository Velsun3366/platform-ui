import { App } from 'vue';
import router from '@/router';
import { ConfigProvider } from 'Vant';
import { test } from '@platform-ui/commons';

export const setupApp = (app: App) => {
    //
    app.use(router);
    //
    router.isReady().then(() => {
        app.mount('#app');
        test();
    });
};
