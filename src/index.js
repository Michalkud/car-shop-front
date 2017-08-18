import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from 'services/registerServiceWorker';
import store from './store';
import Application from 'components/Application';
import 'styles/main.scss';

const Root = () => (
    <Provider store={store}>
    <Application />
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
