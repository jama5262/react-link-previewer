import React from 'react'

import { Input } from 'antd';
const { TextArea } = Input;

export const TextInput = () => {
  return (
    <div>
      <TextArea
        placeholder="Add link to preview"
        autosize={{ minRows: 5, maxRows: 10 }}
      />
    </div>
  )
}
