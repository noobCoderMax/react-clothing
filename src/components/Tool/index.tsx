import React, { useState } from 'react'
import s from './index.module.less'
import { MessageOutlined, PhoneOutlined, FormOutlined, CloudOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { Button, Modal } from 'antd';
import classNames from 'classnames'
import WeatherCard from '../WeatherCard'
const iconStyle: React.CSSProperties = {
  fontSize: '26px',
  textAlign: 'center',
  lineHeight: '60px',
  height:'60px'
}

const WeatherCardStyle: React.CSSProperties = {
  height: "260px",
  width: "420px",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
}

const Tool: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const smoothTop = () => {
    window.scrollTo(0, 0);
  }

  const weather = () => {
    showModal()
  }

  const message = () => {
    alert('customer')
  }

  const customer = () => {
    alert('customer')
  }

  const feedback = () => {
    alert('feedback')
  }


  return <div className={classNames([s.position,"animate__animated","animate__bounce"])}>
      <div className={s.tool}>
      <div className={s.tool_item} onClick={()=>message()}><MessageOutlined style={iconStyle} /><span>消息</span></div>
      <div className={s.tool_item} onClick={()=>customer()}><PhoneOutlined style={iconStyle} /><span>官方客服</span> </div>
      <div className={s.tool_item} onClick={()=>feedback()}><FormOutlined style={iconStyle} /><span>反馈</span></div>
      <div className={s.tool_item} onClick={()=>weather()}><CloudOutlined style={iconStyle} /><span>天气卡片</span></div>
      <div className={s.tool_item} onClick={()=>smoothTop()}><ArrowUpOutlined style={iconStyle} /><span>回到顶部</span></div>
    </div >
      <Modal
        title="天气卡片"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={WeatherCardStyle}
        centered={true}
        okText="确定"
        cancelText="关闭"
      >
        <WeatherCard/>
      </Modal>
  </div>
}
export default Tool