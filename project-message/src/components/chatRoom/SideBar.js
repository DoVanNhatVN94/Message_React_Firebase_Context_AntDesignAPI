/** @format */

import { Col, Row } from "antd";
import React from "react";
import RoomList from "./RoomList";
import UserInfo from "./UserInfo";
import styled from 'styled-components'

const SideBarStyle = styled.div`
  background: #3f0e40;
  color:white;
  height: 100vh;
`;

export default function SideBar() {
  return (
    <SideBarStyle>
      <Row>
        <Col span={24}><UserInfo/></Col>
        <Col span={24}><RoomList/></Col>
      </Row>
    </SideBarStyle>
  );
}
