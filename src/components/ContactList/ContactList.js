import React from 'react';
import { Layout } from 'antd';

const { Sider } = Layout; 

const ContactList = () => (
    <Layout>
    <Sider>Contact List</Sider>
    </Layout>
);

ContactList.defaultProps = {};
ContactList.propTypes = {};

export default ContactList;
