/** @format */

import { Avatar, Button, Typography } from "antd";
import styled from "styled-components";
import React from "react";

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83) ;
        .username {
    color: white;
    margin-left: 5px;
  }
`;

export default function UserInfo() {
  return (
    <WrapperStyled>
      <div>
        <Avatar />
        <Typography></Typography>
      </div>
      <Button ghost>Dang xuat</Button>
    </WrapperStyled>
  );
}
