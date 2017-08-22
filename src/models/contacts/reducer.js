import * as types from './types';
const initState = {
    contacts: [],
    selectedContact: {
        id: 3,
        name : 'Honza Kudrnáč',
        phone: '604 385 782',
        address: 'Na Cihlářce 576, Nová Paka, 50901',
        email: 'michalkud@gmail.com',
        web: 'bravecrew.cz',
        birthday: '10.6.1993'
    }
};

const reducer = (state = initState, action) => {
    const { payload } = action;
    switch (action.type) {
        case types.REQUEST_CONTACTS_SUCCESS:
            return {
                ...state,
                contacts: payload.data
            };
        case types.EDIT_CONTACT_SUCCESS:
            return {
                ...state,
                contacts: state.contacts.map((contact) => {
                    if (contact.id === payload.data.id) {
                        return payload.data;
                    } else {
                        return contact;
                    }
                })
            };
        case types.GET_CONTACT_SUCCESS:
            return {
                ...state,
                selectedContact: Object.assign({}, payload.data)
            };
        default:
            return state;
    }
};

export default reducer;


