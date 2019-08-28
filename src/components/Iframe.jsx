import React from 'react'

import { Result, Button, Avatar, Icon, BackTop } from 'antd';

export const Iframe = (props) => {

  const getHostUrl = (url) => {
    return url.match(/^(.*:)\/\/([A-Za-z0-9\-.]+)(:[0-9]+)?(.*)$/)[2]
  }

  const openWebsite = (url) => {
    window.open(url, '_blank')
  }

  const hasNoXframeOptions = (
    <div>
      <iframe
        title="Inline Frame"
        width="900"
        height="450"
        src={ props.data.url }>
      </iframe>
    </div>
  );

  const hasXframeOptions = (
    <div>
      <Result
        style={{ width: "900px" }}
        icon={ <Avatar src={ props.data.favicon } style={{ padding: "5px", color: "#000", backgroundColor: '#FFF' }} size="large" icon="close" />}
        title={
          <div>
            <BackTop/>
            <strong style={{ color: "#1890ff" }}> { getHostUrl(props.data.url) } </strong>
            can not be previewed here, please visit the original website to view its content
          </div>
        }
        extra={[
          <Button key="1" type="primary" onClick={ () => openWebsite(props.data.url) }>
            <Icon type="select" />
            Visit Website
          </Button>,
        ]}
      />
    </div>
  );

  return props.data.hasXframeOptions ? hasXframeOptions : hasNoXframeOptions
}
