import React from 'react'

import { List, Card, Row, Col, Avatar, Typography, Tag } from 'antd';
const { Paragraph } = Typography;

export default function Previews(props) {

  return (
    <div>
      <List
        style={{ wordWrap: "break-word" }}
        size="large"
        split={false}
        dataSource={props.data}
        renderItem={item => (
          <List.Item
            style={{ padding: "10px" }}>
            <Card hoverable style={{ borderRadius: "20px", width: "100%", height: "120px" }}>
              <Row>
                <Col span={6}>
                  <Avatar src={item.image} style={{ width: "100%", height: "118px", objectFit: "cover", borderRadius: 0, borderTopLeftRadius: "19px", backgroundColor: '#009688', borderBottomLeftRadius: "19px", lineHeight: "118px" }} shape="square" size={64} icon="global" />
                </Col>
                <Col style={{ padding: "20px 15px" }} span={18}>
                  <Paragraph ellipsis={{ rows: 2 }} strong>{item.title}</Paragraph>
                  <Tag style={{ padding: "0 10px 0 0", borderRadius: "20px", width: "100%" }} color='#B2DFDB'>
                    <Avatar src={item.favicon} style={{ color: "#000", lineHeight: "14px", padding: "5px", marginRight: "10px", backgroundColor: '#FFF', float: "left" }} size="small" icon="global" />
                    <Paragraph style={{ margin: "3px 0 0 0", color: '#009688' }} ellipsis strong>{item.url}</Paragraph>
                  </Tag>
                </Col>
              </Row>
            </Card>
          </List.Item>
        )}
      />
    </div>
  )
}
