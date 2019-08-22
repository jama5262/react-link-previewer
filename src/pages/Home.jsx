import React from 'react'
import { useSelector } from "react-redux";

import ListItem from "../components/ListItem"

import { Typography , Row, Col } from 'antd';
const { Title } = Typography;


export default function Home() {

  const defaultLinks = useSelector(state => state.defaultLinks)

  return (
    <div>
      <Row>
        <Col style={{ border: "1px solid black", height: "100vh" }} span={5}>
          <Title level={3}>Try the following links</Title>
          <ListItem />
        </Col>
        <Col style={{ border: "1px solid black", height: "100vh" }} span={14}>
        <Title>React Link Previewer</Title>
        </Col>
        <Col style={{ border: "1px solid black", height: "100vh" }} span={5}>
        <Title level={3}>Recent links</Title>
        </Col>
      </Row>
    </div>
  )
}
