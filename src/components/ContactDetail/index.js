import ContactDetail from './ContactDetail.js';
import { connect } from 'react-redux';
import { actions as contactsAction } from 'models/contacts'; 

const mapStateToProps = state => {

    return { 
        contact: state.contacts.selectedContact
    };
};

const mapDispatchToProps = dispatch => {
    return {
        editContact: (data) => dispatch(contactsAction.editContact(data))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactDetail);

