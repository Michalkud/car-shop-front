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

    render() {

        return (
            <Layout>
                <Content>
                    {this.props.name}  
                    {this.props.phone}
                    {this.props.address}
                    {this.props.email}
                    {this.props.web}
                    {this.props.birthday}
                </Content>
            </Layout>
        );
    }
}


ContactDetail.defaultProps = {};
ContactDetail.propTypes = propTypes;

export default ContactDetail;
