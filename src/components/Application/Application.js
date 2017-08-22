import React from 'react';
import { Layout } from 'antd';

const { Content, Sider } = Layout; 

import ContactDetail from 'components/ContactDetail';
import ContactList from 'components/ContactList';


const propTypes = {};

const Application = () => (
  <Layout>
    <Sider>
      <ContactList />
    </Sider>
    <Layout>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          background: '#fff',
          minHeight: 280
        }}
      >
        <ContactDetail />
      </Content>
    </Layout>
  </Layout>
);

Application.defaultProps = {};
Application.propTypes = propTypes;

export default Application;
