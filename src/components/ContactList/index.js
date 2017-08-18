import { connect } from 'react-redux';

import ContactList from './ContactList.js';

import { selectors as contactsSelectors } from 'models/contacts';

const mapStateToProps = state => {
    return {
        contacts: contactsSelectors.selectShortContacts(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactList);

