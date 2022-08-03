import { App } from 'vue';
import router from '@/router';
import { IonicVue } from '@ionic/vue';
import { test } from '@platform-ui/commons';

export const setupApp = (app: App) => {
    //
    app.use(IonicVue);
    app.use(router);
    //
    test();
    router.isReady().then(() => {
        app.mount('#app');
    });
};
