import React, { Component } from 'react';
import { Menu, Icon, Button, Popover } from 'antd';
import PropTypes from 'prop-types';

import contactPropTypes from './components/Contact/propTypes';

const propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape(contactPropTypes)
  ),
  selectedContact: PropTypes.shape(contactPropTypes),
  setContactById: PropTypes.func.isRequired
};

class ContactList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible : false,
      defaultSelectedKeys: ['1']
    };
  }

  componentDidMount() {
    this.props.loadContacts();
  }

  handleClick = (e) => {
    this.props.setContactById(Number(e.key));
  }

  handleDelete = () => {
    this.props.deleteContactById(this.props.selectedContact.id);
    this.hide();
  }

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }

  hide = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
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
      { this.props.selectedContact.id &&

      <Popover
          content={
          <div>
            <Button type="danger" onClick={this.handleDelete}>Yes</Button>
            <Button onClick={this.hide} >No</Button>
            
          </div>
          }
          title="Are you sure?"
          trigger="click"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
        >
          <Button type="danger">Delete contact</Button>
      </Popover>
      }

  

      <Button onClick={this.props.selectEmptyUser} >NEW CONTACT</Button>


      </div>
    );
  }
}

ContactList.defaultProps = { contacts: [] };
ContactList.propTypes = propTypes;

export default ContactList;
