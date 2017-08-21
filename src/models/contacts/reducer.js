import * as types from './types';
const initState = [];

const reducer = (state = initState, action) => {
    const { payload } = action;
    switch (action.type) {
        case types.REQUEST_CONTACTS_SUCCESS:
            return {
                ...state,
                contacts: payload.data
            };
        default:
            return state;
    }
};

export default reducer;


