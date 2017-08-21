import React, { Component } from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

const { Content } = Layout; 

const propTypes = {
    name : PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
    web: PropTypes.string,
    birthday: PropTypes.string
};

class ContactDetail extends Component {

    constructor(props) {
        super(props);
        this.state = props;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        console.log(this.props);
        return (
            <Layout>
                <Content>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input type="text" value={this.props.name} onChange={this.handleChange} />
                        </label>
                        <label>
                            Phone:
                            <input type="text" value={this.props.phone} onChange={this.handleChange} />
                        </label>
                        <label>
                            Address:
                            <input type="text" value={this.props.address} onChange={this.handleChange} />
                        </label>
                        <label>
                            Email:
                            <input type="text" value={this.props.email} onChange={this.handleChange} />
                        </label>
                        <label>
                            Birthday:
                            <input type="text" value={this.props.birthday} onChange={this.handleChange} />
                        </label>
                        <label>
                            Web:
                            <input type="text" value={this.props.web} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                        
                    </form>  
                    {/* {this.props.name}  
                    {this.props.phone}
                    {this.props.address}
                    {this.props.email}
                    {this.props.web}
                    {this.props.birthday} */}
                </Content>
            </Layout>
        );
    }
}


ContactDetail.defaultProps = {};
ContactDetail.propTypes = propTypes;

export default ContactDetail;
