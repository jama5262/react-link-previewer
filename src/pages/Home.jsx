import React, { Component } from 'react'
import { Layout } from 'antd';

const { Footer, Sider, Content } = Layout;

export default class Home extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
          <Sider>Sider</Sider>
        </Layout>
      </div>
    )
  }
}
