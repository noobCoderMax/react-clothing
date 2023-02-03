import React from 'react'
import s from './index.module.less'
import { MessageOutlined, PhoneOutlined, FormOutlined, ExclamationCircleOutlined, ArrowUpOutlined } from '@ant-design/icons'
const iconStyle: React.CSSProperties = {
  fontSize: '26px',
  textAlign: 'center',
  lineHeight: '60px',
  height:'60px'
}

const Tool: React.FC = () => {
  const smoothTop = () => {
    window.scrollTo(0, 0);
  }

  const report = () => {
    alert('report')
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


  return <div className={s.position}>
      <div className={s.tool}>
      <div className={s.tool_item} onClick={()=>message()}><MessageOutlined style={iconStyle} /><span>消息</span></div>
      <div className={s.tool_item} onClick={()=>customer()}><PhoneOutlined style={iconStyle} /><span>官方客服</span> </div>
      <div className={s.tool_item} onClick={()=>feedback()}><FormOutlined style={iconStyle} /><span>反馈</span></div>
      <div className={s.tool_item} onClick={()=>report()}><ExclamationCircleOutlined style={iconStyle} /><span>举报</span></div>
      <div className={s.tool_item} onClick={()=>smoothTop()}><ArrowUpOutlined style={iconStyle} /><span>回到顶部</span></div>
    </div >
  </div>
}
export default Tool