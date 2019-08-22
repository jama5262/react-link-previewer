import React from 'react'
import { Layout } from 'antd';

import { useSelector } from 'react-redux'

const { Footer, Sider, Content } = Layout;

export default function Home() {

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
