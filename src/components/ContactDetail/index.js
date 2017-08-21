import ContactDetail from './ContactDetail.js';
import { connect } from 'react-redux';

const mapStateToProps = state => {

    return state.contacts.selectedContact;
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactDetail);

