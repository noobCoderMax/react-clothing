import React from "react";
import { useLocation } from "react-router-dom";
import ClothingShow from "../../components/ClothingShow";
import Header from "../../components/Header";
import s from './index.module.less'
import { StarOutlined } from '@ant-design/icons'

const starStyle: React.CSSProperties = {
  color: '#ff8f1c',
}

const Detail: React.FC = () => {
  const { state } = useLocation()

  const CollectionItem = (id:string) => {
    alert('收藏物品接口-Detail-Components:',id)
  }

  return <div>
    <Header />
    <div className={s.detail}>
      <div className={s.detail_show}>
        <ClothingShow images={state.images} />
        <div className={s.detail_show_like} onClick={()=>CollectionItem(state.id)}>
          <StarOutlined style={starStyle}/>
          <span>收藏宝贝</span>
        </div>
      </div>
      <div className={s.detail_content}>
        <p className={s.detail_content_title}>{state.info}</p>
        <div className={s.detail_content_tips}>
          {
            state.tips.map((item:string) => {
              return <span key={item}>{item}</span>
            })
          }
        </div>
        <div className={s.detail_content_price}>
            <span>超值价格:</span>￥<span>{state.price}</span>
        </div>
        </div>
    </div>
  </div >
}

export default Detail
