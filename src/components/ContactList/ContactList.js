import React, { Component } from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

import './style.scss';
import Contact from './components/Contact';
import contactPropTypes from './components/Contact/propTypes';

const { Sider } = Layout; 

const propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape(contactPropTypes)
    )
};

class ContactList extends Component {

    componentDidMount() {
        this.props.loadContacts();
    }

    render() {
        console.log(this.props);
        return (
            <Sider className="contact-list">
            {   
                this.props.contacts.map((contact, i) => (
                    <Contact key={i} {...contact} /> 
                ))
            }
            </Sider>
        );
    }
}

ContactList.defaultProps = { contacts: [] };
ContactList.propTypes = propTypes;

export default ContactList;
