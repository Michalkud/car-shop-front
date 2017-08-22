import React, { Component } from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

const { Content } = Layout; 

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
            <Layout>
                <Content>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={(e) => this.handleChange(e, 'name')} />
                    </label>
                    <label>
                        Phone:
                        <input type="text" value={this.state.phone} onChange={(e) => this.handleChange(e, 'phone')} />
                    </label>
                    <label>
                        Address:
                        <input type="text" value={this.state.address} onChange={(e) => this.handleChange(e, 'address')} />
                    </label>
                    <label>
                        Email:
                        <input type="text" value={this.state.email} onChange={(e) => this.handleChange(e, 'email')} />
                    </label>
                    <label>
                        Birthday:
                        <input type="text" value={this.state.birthday} onChange={(e) => this.handleChange(e, 'birthday')} />
                    </label>
                    <label>
                        Web:
                        <input type="text" value={this.state.web} onChange={(e) => this.handleChange(e, 'web')} />
                    </label>
                    <button onClick={() => this.props.editContact(this.state)} > Save </button>
                        
                </Content>
            </Layout>
        );
    }
}


ContactDetail.defaultProps = {};
ContactDetail.propTypes = propTypes;

export default ContactDetail;
