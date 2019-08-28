import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { addQueryAction } from "../redux/actions"

import { Input } from 'antd';
const { TextArea } = Input;

export const TextInput = () => {

  const query = useSelector((state) => state.query)
  const dispatch = useDispatch()

  const changeQuery = (value) => {
    dispatch(addQueryAction(value))
  }

  return (
    <div>
      <TextArea
        value={ query.text }
        onChange={ (e) => changeQuery(e.target.value) }
        placeholder="Add link to preview"
        autosize={{ minRows: 5, maxRows: 10 }}
      />
    </div>
  )
}
