import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { reducer as contactsReducer, saga as contactsSaga } from './contacts';

const reducer = combineReducers({
    contacts: contactsReducer 
});

const saga = function*() {
    yield all([...contactsSaga]);
};

export {
    reducer,
    saga
};
