import React from 'react'
import s from './index.module.less'
import avatorUrl from '../../assets/images/sze.jpg'
import { StarOutlined, GiftOutlined, ReconciliationOutlined, CompassOutlined } from '@ant-design/icons'

const iconStyle: React.CSSProperties = {
  fontSize: "28px",
  width: "70px",
  height: "40px",
  textAlign: "center",
  lineHeight: "40px"
}

const MineCard: React.FC = () => {

  const info = {
    avator: "1",
    nickname:"宋祖儿",
  }

  const infoList = [
    {
      id: 1,
      count: 3,
      title: "购物车",
      routeLink:""
    },
    {
      id: 2,
      count: 1,
      title:"发货中",
      routeLink:""
    },
    {
      id: 3,
      count: 0,
      title:"待发货",
      routeLink:""
    },
    {
      id: 4,
      count: 0,
      title:"待付款",
      routeLink:""
    },  {
      id: 5,
      count: 0,
      title:"待评价",
      routeLink:""
    }
  ]

  const opList = [
    {
      id: 1,
      icon: <StarOutlined style={iconStyle} />,
      title: "我的收藏",
      routeLink:""
    },
    {
      id: 2,
      icon: <GiftOutlined style={iconStyle} />,
      title: "买过的店",
      routeLink:""
    },
    {
      id: 3,
      icon: <ReconciliationOutlined style={iconStyle} />,
      title: "收藏的店",
      routeLink:""
    },
    {
      id: 4,
      icon: <CompassOutlined style={iconStyle} />,
      title: "我的足迹",
      routeLink:""
    }
  ]

  const goPage = (link: string) => {
    console.log('link',link);
  }

  return <div className={s.mine}>
    <div className={s.mine_avator}>
      <img src={avatorUrl} alt="avator" />
    </div>
    <div className={s.mine_nickname}>
      Hi,{info.nickname}
    </div>
    <div className={s.mine_items}>
      {
        infoList.map(item => {
          return <div className={s.mine_items_item} key={item.id} onClick={()=>goPage(item.routeLink)}>
            <span>{item.count}</span>
            <span>{item.title}</span>
          </div>
        })
      }
    </div>
    <div className={s.mine_op}>
      {
        opList.map(item => {
          return <div key={item.id} className={s.mine_op_item} onClick={()=>goPage(item.routeLink)}>{item.icon}<span>{item.title}</span></div>
        })
      }
    </div>
    <div className={s.mine_news}>
      <span>热点</span>三体热播中
    </div>
  </div>
}

export default MineCard