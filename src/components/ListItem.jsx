import React from 'react'
import { useSelector } from "react-redux";

import { List, Typography, Icon, Row, Col, Button, Empty } from 'antd';
const { Text } = Typography;

export default function ListItem(props) {
  console.log(props.data);

  const test = (text) => {
    alert(text);
  }

  return (
    <div>
      <List
        style={{ wordWrap: "break-word" }}
        size="large"
        dataSource={props.data}
        renderItem={item => (
          <List.Item
            style={{ padding: "10px" }}>
            <Row style={{ width: "100%" }}>
              <div>
                <Text strong>{item.text}</Text>
              </div>
              <Row style={{ paddingTop: "15px" }} type="flex" justify="end">
                <Col>
                  <Icon onClick={() => test(item.text)} type="swap" style={{ marginRight: 20, fontSize: "17px" }}></Icon>
                  <Icon type="plus" style={{ marginRight: 20, fontSize: "17px" }}></Icon>
                </Col>
              </Row>
            </Row>
          </List.Item>
        )}
      />
    </div>
  )
}
