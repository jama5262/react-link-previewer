import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import ListItem from "../components/ListItem"

import { Drawer } from 'antd';

export default function DrawerLinks() {

  const defaultLinks = useSelector(state => state.defaultLinks)
  const recentLinks = useSelector(state => state.recentLinks)
  const drawerData = useSelector(state => state.drawerData)

  const dispatch = useDispatch()

  const closeDrawer = () => {
    dispatch({ type: "CLOSE_DRAWER" })
  }

  return (
    <Drawer
      placement={ drawerData.drawerDirection }
      closable={ false }
      onClose={ closeDrawer }
      visible={ drawerData.showDrawer }
    >
      <ListItem data={ drawerData.drawerDirection === "left" ? defaultLinks : recentLinks } />
    </Drawer>
  )
}
