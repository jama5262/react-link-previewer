import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

import { openLeftDrawerAction, openRightDrawerAction, clearQueryAction, scrapeWebsiteAction } from "../redux/actions"

import { ListItem } from "../components/ListItem"
import { TextInput } from "../components/TextInput"
import { Previews } from "../components/Previews"
import { UnknownLinks } from "../components/UnknownLinks"
import { DrawerLinks } from "../components/DrawerLinks"

import { Button, Typography, Row, Col, Icon } from 'antd';
const { Title } = Typography;


export const Home = () => {

  const defaultLinks = useSelector(state => state.defaultLinks)
  const recentLinks = useSelector(state => state.recentLinks)

  const dispatch = useDispatch()

  useEffect(() => {
    showHideMenuLink()
    window.addEventListener("resize", () => {
      showHideMenuLink()
    })
  })

  const showHideMenuLink = () => {
    let linkMenu = document.getElementsByClassName("linkMenu")
    const changeDisplayClass = (display) => {
      for (let i = 0; i < linkMenu.length; i++) {
        linkMenu[i].style.display = display
      }
    }
    if (window.innerWidth < 992) {
      changeDisplayClass("block")
    } else if (window.innerWidth >= 992) {
      changeDisplayClass("none")
    }
  }

  const scrapeWebsite = () => {
    dispatch(scrapeWebsiteAction())
  }

  const openLeftDrawer = () => {
    dispatch(openLeftDrawerAction())
  }

  const openRightDrawer = () => {
    dispatch(openRightDrawerAction())
  }

  const clearQuery = () => {
    dispatch(clearQueryAction())
  }

  return (
    <div>
      <Row>
        <Col style={{ height: "100vh", overflow: "scroll", overflowX: "hidden" }} xs={ 0 } lg={ 5 }>
          <Title style={{ padding: "20px 10px", textAlign: "center" }} level={ 3 }>Try the following links</Title>
          <ListItem data={ defaultLinks } />
        </Col>
        <Col style={{ paddingTop: "20px", height: "100vh", overflow: "scroll", overflowX: "hidden" }} xs={ 24 } lg={ 14 }>
          <Row type="flex" justify="space-between">
            <Col className="linkMenu">
              <Icon onClick={ () => openLeftDrawer() } style={{ fontSize: "30px", paddingLeft: "30px" }} type="menu" />
            </Col>
            <Col className="linkMenu">
              <Icon onClick={ () => openRightDrawer() } style={{ fontSize: "30px", paddingRight: "30px" }} type="menu" />
            </Col>
          </Row>
          <Title style={{ padding: "70px 10px 50px 10px", textAlign: "center" }}>React Link Previewer</Title>
          <Row>
            <Col span={ 16 } offset={ 4 }>
              <TextInput />
            </Col>
          </Row>
          <Row style={{ margin: "20px 0 25px 0" }}>
            <Col md={{ span: 8, offset: 8 }} xl={{ span: 10, offset: 7 }} lg={{ span: 10, offset: 7 }}>
              <Row type="flex" justify="space-around">
                <Col>
                  <Button onClick={ () => clearQuery() }>Clear</Button>
                </Col>
                <Col>
                  <Button onClick={ () => scrapeWebsite() } type="primary">Scrape</Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={ 16 } offset={ 4 }>
              <UnknownLinks />
              <div style={{ paddingTop: "20px" }}></div>
              <Previews />
            </Col>
          </Row>
        </Col>
        <Col style={{ height: "100vh", overflow: "scroll", overflowX: "hidden" }} xs={ 0 } lg={ 5 }>
          <Title style={{ padding: "20px 10px", textAlign: "center" }} level={3}>Recent links</Title>
          <ListItem data={ recentLinks } />
        </Col>
      </Row>
      <DrawerLinks />
    </div>
  )
}
