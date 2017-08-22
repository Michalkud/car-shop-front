import { connect } from 'react-redux';

import ContactList from './ContactList.js';

import { actions as contactActions, selectors as contactsSelectors } from 'models/contacts';

const mapStateToProps = state => {
    return {
        contacts: contactsSelectors.selectShortContacts(state.contacts),
        selectedContact: state.contacts.selectedContact
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadContacts: () => dispatch(contactActions.requestContacts()),
        setContactById: (id) => dispatch(contactActions.selectContactById(id)),
        deleteContactById: (id) => dispatch(contactActions.deleteContactById(id)),
        selectEmptyUser: () => dispatch(contactActions.selectEmptyUser())
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactList);

