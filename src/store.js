import { createStore } from 'redux';

import { reducer } from 'models';

// Enable DevTools extension in Google Chrome
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, devTools);

export default store;
