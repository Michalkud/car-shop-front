import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from 'services/registerServiceWorker';
import 'styles/main.scss';

const Root = () => (
    <Provider>
    <div>
        New react app!
    </div>
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
