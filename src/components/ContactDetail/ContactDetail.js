import React, { Component } from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const propTypes = {
    data: PropTypes.shape({
    name : PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
    web: PropTypes.string,
    birthday: PropTypes.string
    }),
    editContact: PropTypes.func.isRequired
};

class ContactDetail extends Component {

    constructor(props) {
        super(props);
        this.state = props.contact;
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.state = this.props.contact;
    }

    componentWillReceiveProps(props) {
        this.state = props.contact;
    }


    // TODO implement better way
    handleChange(event, id) {
        let obj = {};
        obj[id] = event.target.value;
        this.setState(obj);
    }

    handleSubmit(event) {
        this.props.editContact(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <p>
                    Name:
                    <input type="text" value={this.state.name} onChange={(e) => this.handleChange(e, 'name')} />
                </p>
                <p>
                    Phone:
                    <input type="text" value={this.state.phone} onChange={(e) => this.handleChange(e, 'phone')} />
                </p>
                <p>
                    Address:
                    <input type="text" value={this.state.address} onChange={(e) => this.handleChange(e, 'address')} />
                </p>
                <p>
                    <Icon type="inbox" />
                    Email:
                    <input type="text" value={this.state.email} onChange={(e) => this.handleChange(e, 'email')} />
                </p>
                <p>
                    Birthday:
                    <input type="text" value={this.state.birthday} onChange={(e) => this.handleChange(e, 'birthday')} />
                </p>
                <p>
                    Web:
                    <input type="text" value={this.state.web} onChange={(e) => this.handleChange(e, 'web')} />
                </p>
                <button onClick={() => this.props.editContact(this.state)} > Save </button>
                <button onClick={() => this.props.createContact(this.state)} > Create </button>
                    
            </div>
        );
    }
}


ContactDetail.defaultProps = {};
ContactDetail.propTypes = propTypes;

export default ContactDetail;
