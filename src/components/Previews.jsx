import React from 'react'
import { useSelector } from "react-redux";

import { Iframe } from "./Iframe"

import { List, Card, Row, Col, Avatar, Typography, Tag, Popover } from 'antd';
const { Title, Paragraph } = Typography;
const { Item } = List

export const Previews = () => {

  const previews = useSelector(state => state.previews)

  if (previews.data.length === 0) {
    return (
      <div></div>
    )
  }
  return (
    <div>
      <Title level={ 4 }>Previews</Title>
      <List
        style={{ wordWrap: "break-word" }}
        size="large"
        split={ false }
        dataSource={ previews.data }
        renderItem={ item => (
          <Item
            style={{ padding: "10px" }}>
            <Popover placement="top" content={
              <Iframe data={item} />
            }>
              <Card hoverable style={{ borderRadius: "20px", width: "100%", height: "120px" }}>
                <Row>
                  <Col span={6}>
                    <Avatar src={ item.image } style={{ width: "100%", height: "118px", objectFit: "cover", borderRadius: 0, borderTopLeftRadius: "19px", backgroundColor: '#1890ff', borderBottomLeftRadius: "19px", lineHeight: "118px" }} shape="square" size={ 64 } icon="global" />
                  </Col>
                  <Col style={{ padding: "20px 15px" }} span={18}>
                    <Paragraph style={{ color: "#000" }} ellipsis={{ rows: 2 }} strong>{ item.title }</Paragraph>
                    <Tag style={{ padding: "0 10px 0 0", borderRadius: "20px", width: "100%" }} color='#BBDEFB'>
                      <Avatar src={item.favicon} style={{ color: "#000", lineHeight: "14px", padding: "5px", marginRight: "10px", backgroundColor: '#FFF', float: "left" }} size="small" icon="global" />
                      <Paragraph style={{ margin: "3px 0 0 0", color: '#1890ff' }} ellipsis strong>{ item.url }</Paragraph>
                    </Tag>
                  </Col>
                </Row>
              </Card>
            </Popover>
          </Item>
        ) }
      />
    </div>
  )
}
