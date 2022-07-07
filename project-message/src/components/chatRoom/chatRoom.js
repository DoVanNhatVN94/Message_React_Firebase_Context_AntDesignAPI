import React from 'react'
import {Row,Col} from 'antd'
import SideBar from './SideBar'
import ChatWindow from './ChatWindow'
export default function chatRoom() {
  return (
    <div>
        <Row>
            <Col span={6}><SideBar/></Col>
            <Col span={18}><ChatWindow/></Col>
        </Row>
    </div>
  )
}
