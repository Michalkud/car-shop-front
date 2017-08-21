import * as types from './types';
const initState = {
    contacts: [
    {
        id: 1,
        name : 'Michal Kudrnáč',
        phone: '604 385 782',
        address: 'Na Cihlářce 576, Nová Paka, 50901',
        email: 'michalkud@gmail.com',
        web: 'bravecrew.cz',
        birthday: '10.6.1993'
    },
    {
        id: 2,
        name : 'Hana Kudrnáčová',
        phone: '604 385 782',
        address: 'Na Cihlářce 576, Nová Paka, 50901',
        email: 'michalkud@gmail.com',
        web: 'bravecrew.cz',
        birthday: '10.6.1993'
    },
    {
        id: 3,
        name : 'Honza Kudrnáč',
        phone: '604 385 782',
        address: 'Na Cihlářce 576, Nová Paka, 50901',
        email: 'michalkud@gmail.com',
        web: 'bravecrew.cz',
        birthday: '10.6.1993'
    }],
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

const selectContactById = (contacts, id) => {
    return contacts.filter((contact) => contact.id === id )[0];
};

const reducer = (state = initState, action) => {
    const { payload } = action;
    switch (action.type) {
        case types.SELECT_CONTACT_BY_ID:
            return {
                ...state,
                selectedContact: selectContactById(state.contacts, payload.data)
            };
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


