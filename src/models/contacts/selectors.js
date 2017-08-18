//import { createSelector } from 'reselect';

const _translateToShortVersion = () => {
    return [];
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
