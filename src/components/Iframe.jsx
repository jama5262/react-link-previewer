import React from 'react'

import { Result, Button, Avatar } from 'antd';

export default function Iframe(props) {

  console.log(props.data);
  

  const hasXframeOptionsExists = (
    <div>
      <iframe
        title="Inline Frame"
        width="900"
        height="450"
        src={props.data.url}>
      </iframe>
    </div>
  );

  const hasXframeOptionsDoesExists = (
    <div width="900" height="450">
      <Result
        icon={<Avatar scr={props.data.favicon} shape="square" size={64} icon="close" />}
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[ 
          <Button type="primary" key="console">
            Go Console
          </Button>,
        ]}
      />
    </div>
  );

  return props.data.hasXframeOptions ? hasXframeOptionsDoesExists : hasXframeOptionsExists
}
