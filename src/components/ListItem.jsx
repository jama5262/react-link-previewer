import React from 'react'
import { useDispatch } from "react-redux";

import { swapQueryAction, concatenateQueryAction } from "../redux/actions";

import { List, Typography, Icon, Row, Col } from 'antd';
const { Text } = Typography;
const { Item } = List

export const ListItem = (props) => {

  const dispatch = useDispatch()

  const concatenateQuery = (text) => {
    dispatch(concatenateQueryAction(text))
  }

  const swapQuery = (text) => {
    dispatch(swapQueryAction(text))
  }

  return (
    <div>
      <List
        style={{ wordWrap: "break-word" }}
        size="large"
        dataSource={ props.data }
        renderItem={ item => (
          <Item
            style={{ padding: "10px" }}>
            <Row style={{ width: "100%" }}>
              <div>
                <Text strong>{ item.text }</Text>
              </div>
              <Row style={{ paddingTop: "15px" }} type="flex" justify="end">
                <Col>
                  <Icon onClick={ () => swapQuery(item.text) } type="swap" style={{ marginRight: 20, fontSize: "17px" }}></Icon>
                  <Icon onClick={ () => concatenateQuery(item.text) } type="plus" style={{ marginRight: 20, fontSize: "17px" }}></Icon>
                </Col>
              </Row>
            </Row>
          </Item>
        )}
      />
    </div>
  )
}
