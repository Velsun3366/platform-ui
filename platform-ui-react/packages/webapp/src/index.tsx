import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
//
import '@/index.scss';
//
import App from '@/App';
import store from '@/store';
import { setup } from '@/utils';

setup();

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
