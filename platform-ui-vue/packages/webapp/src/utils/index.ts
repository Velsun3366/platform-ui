import { App } from 'vue';
import router from '@/router';
import { test } from '@platform-ui/commons';

export const setupApp = (app: App) => {
    //
    app.use(router);
    //
    router.isReady().then(() => {
        test();
        app.mount('#app');
    });
};
