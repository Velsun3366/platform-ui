import { App } from 'vue';
import router from '@/router';

export const setupApp = (app: App) => {
    //
    app.use(router);
    //
    router.isReady().then(() => {
        app.mount('#app');
    });
};
