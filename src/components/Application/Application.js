import React from 'react';
import { Layout } from 'antd';

const { Header, Footer } = Layout; 

import ContactDetail from 'components/ContactDetail';
import ContactList from 'components/ContactList';


const propTypes = {};

const Application = () => (
    <div>
    <Layout>
      <Header>Header</Header>
      <Layout>
        <ContactDetail />
        <ContactList />
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    </div>
);

Application.defaultProps = {};
Application.propTypes = propTypes;

export default Application;
