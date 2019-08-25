import React from 'react'
import { useSelector } from "react-redux";

import ListItem from "../components/ListItem"

import { Button, Typography , Row, Col } from 'antd';
const { Title } = Typography;


export default function Home() {

  const defaultLinks = useSelector(state => state.defaultLinks)

  return (
    <div>
      <Row>
        <Col style={{ height: "100vh", overflow: "scroll", overflowX: "hidden" }} span={5}>
          <Title style={{ padding: "10px", textAlign: "center"}} level={3}>Try the following links</Title>
          <ListItem data={defaultLinks}/>
        </Col>
        <Col style={{ border: "1px solid black", height: "100vh" }} span={14}>
        <Title style={{ padding: "10px", textAlign: "center"}}>React Link Previewer</Title>
        </Col>
        <Col style={{ border: "1px solid black", height: "100vh" }} span={5}>
        <Title style={{ padding: "10px", textAlign: "center"}} level={3}>Recent links</Title>
        </Col>
      </Row>
    </div>
  )
}
