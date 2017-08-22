import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import PropTypes from 'prop-types';

//import Contact from './components/Contact';
import contactPropTypes from './components/Contact/propTypes';

const propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape(contactPropTypes)
  ),
  setContactById: PropTypes.func.isRequired
};

class ContactList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      defaultSelectedKeys: ['1']
    };
  }

  componentDidMount() {
    this.props.loadContacts();
  }

  handleClick = (e) => {
    this.props.setContactById(Number(e.key));
  }

  render() {
    return (
      <Menu theme="dark" mode="inline" onClick={this.handleClick}>
        {   
          this.props.contacts.map((contact, i) => (
            <Menu.Item key={contact.id}>
              <Icon type="user" />
              <span className="nav-text">{contact.name}</span>
            </Menu.Item> 
          ))
        }
      </Menu>
    );
  }
}

ContactList.defaultProps = { contacts: [] };
ContactList.propTypes = propTypes;

export default ContactList;
