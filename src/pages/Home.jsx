import React from 'react'
import { useSelector } from "react-redux";

import ListItem from "../components/ListItem"
import TextInput from "../components/TextInput"

import { Button, Typography, Row, Col } from 'antd';
const { Title } = Typography;


export default function Home() {

  const defaultLinks = useSelector(state => state.defaultLinks)
  const recentLinks = useSelector(state => state.recentLinks)

  return (
    <div>
      <Row>
        <Col style={{ height: "100vh", overflow: "scroll", overflowX: "hidden" }} span={5}>
          <Title style={{ padding: "10px", textAlign: "center" }} level={3}>Try the following links</Title>
          <ListItem data={defaultLinks} />
        </Col>
        <Col style={{ paddingTop: "70px", height: "100vh", overflow: "scroll", overflowX: "hidden" }} span={14}>
          <Title style={{ padding: "10px", textAlign: "center" }}>React Link Previewer</Title>
          <Row>
            <Col span={16} offset={4}>
              <TextInput />
            </Col>
          </Row>
          <Row style={{ marginTop: "20px"}}>
            <Col xl={{ span: 10, offset: 7 }} lg={{ span: 10, offset: 7 }}>
              <Row type="flex" justify="space-around">
                <Col>
                  <Button>Clear</Button>
                </Col>
                <Col>
                  <Button type="primary">Scrape</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col style={{ height: "100vh", overflow: "scroll", overflowX: "hidden" }} span={5}>
          <Title style={{ padding: "10px", textAlign: "center" }} level={3}>Recent links</Title>
          <ListItem data={recentLinks} />
        </Col>
      </Row>
    </div>
  )
}
