//import { createSelector } from 'reselect';

const _translateToShortVersion = (contacts) => {
    return contacts.map((contact) => {
        return { name: contact.name, phone: contact.phone };
    });
};

const selectShortContacts = (state) => {
    if (state.contacts) {
        return _translateToShortVersion(state.contacts);
    }

    return [];

};

export {
    selectShortContacts
};
