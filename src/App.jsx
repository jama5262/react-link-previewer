import React, { Component } from 'react';
import { Layout } from 'antd';

const { Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default App;
