import { connect } from 'react-redux';

import ContactList from './ContactList.js';

import { actions as contactActions, selectors as contactsSelectors } from 'models/contacts';

const mapStateToProps = state => {
    return {
        contacts: contactsSelectors.selectShortContacts(state.contacts)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadContacts: () => dispatch(contactActions.requestContacts())
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactList);

