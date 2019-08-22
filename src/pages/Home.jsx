import React from 'react'
import { Layout } from 'antd';

import { useSelector } from 'react-redux'

const { Footer, Sider, Content } = Layout;

export default function Home() {

  const j = useSelector(state => state.defaultLinks);

  console.log(j);  

  return (
    <div>
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Content>the user is {j[0].text}</Content>
          <Footer>Footer</Footer>
        </Layout>
        <Sider>Sider</Sider>
      </Layout>
    </div>
  )
}
