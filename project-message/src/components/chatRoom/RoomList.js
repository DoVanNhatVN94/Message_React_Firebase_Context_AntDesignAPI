/** @format */

import { Button, Collapse, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { PlusSquareOutlined } from "@ant-design/icons";
const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header {
      background-color: #3f0e40;
    }

    .ant-collapse-header, p {
      color: white;
    }
    .ant-collapse-content-box {
      padding: 0 40px;
    }
    .add-room {
      color: white;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

export default function RoomList() {
  return (
    <Collapse>
      <PanelStyled header="Danh sach cac phong">
        <LinkStyled>Room 1</LinkStyled>
        <LinkStyled>Room 2</LinkStyled>
        <LinkStyled>Room 3</LinkStyled>
        <Button type="text" icon={<PlusSquareOutlined />} className="add-room">
          Thêm phòng
        </Button>
      </PanelStyled>
    </Collapse>
  );
}
