import { App } from 'vue';
import router from '@/router';
import { IonicVue } from '@ionic/vue';

export const setupApp = (app: App) => {
    //
    app.use(IonicVue);
    app.use(router);
    //
    router.isReady().then(() => {
        app.mount('#app');
    });
};
