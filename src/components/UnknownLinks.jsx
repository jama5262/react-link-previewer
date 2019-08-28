import React from 'react'
import { useSelector } from "react-redux";

import { Typography, List, Tag } from 'antd';
const { Title, Paragraph } = Typography;
const { Item } = List

export const UnknownLinks = () => {

  const unknownLinks = useSelector(state => state.unknownLinks)

  if (unknownLinks.data.length === 0) {
    return (
      <div></div>
    )
  }
  return (
    <div>
      <Title level={ 4 }>Unknown Links</Title>
      <List
        style={{ wordWrap: "break-word" }}
        size="large"
        split={ false }
        dataSource={ unknownLinks.data }
        renderItem={ item => (
          <Item
            style={{ padding: "10px" }}>
            <Tag style={{ padding: "2px 15px", borderRadius: "20px", width: "100%" }} color='#BBDEFB'>
            <Paragraph style={{ margin: "3px 0 0 0", color: '#1890ff' }} ellipsis strong>{ item }</Paragraph>
            </Tag>
          </Item>
        ) }>
      </List>
    </div>
  )
}
