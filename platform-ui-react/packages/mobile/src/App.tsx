import React, { FC, useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Provider } from 'react-redux';
//
import '@/App.scss';
import setup from '@/utils';
import Login from '@/pages/Login';
import Main from '@/pages/Main';
import { store } from '@/store';

setupIonicReact();

const App: FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setup();
        setLoading(false);
    }, []);

    return loading ? (
        <div>Loading</div>
    ) : (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
};

const AppContainer = (): React.ReactElement => {
    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet id="main">
                    <Route exact path="/home">
                        <Main />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Redirect exact path="/" to="/tabs" />
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    );
};
export default App;
