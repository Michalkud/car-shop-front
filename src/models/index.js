import { combineReducers } from 'redux';

import { reducer as contactsReducer } from './contacts';

const reducer = combineReducers({
    contacts: contactsReducer 
});

export {
    reducer
};
