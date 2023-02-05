import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ClothingShow from "../../components/ClothingShow";
import Header from "../../components/Header";
import s from './index.module.less'
import { StarOutlined } from '@ant-design/icons'
import Input from "../../components/Input";

const starStyle: React.CSSProperties = {
  color: '#ff8f1c',
}

const Detail: React.FC = () => {
  const { state } = useLocation()
  const [count,setCount] = useState<number>(0)

  const CollectionItem = (id:string) => {
    alert(`收藏物品接口-Detail-Components:id=${id}`)
  }

  useEffect(() => {
    console.log("count",count);
   },[count])

  const handleGoodCount = (count: string | number) => {
    setCount( count = typeof count === "number" ? count : parseInt(count))
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

        <div className={s.detail_content_size}>
        <div className={s.label}>尺码   :</div>
        </div>

        <div className={s.detail_content_count}>
          <div className={s.label}>数量   :</div>
          <Input type="number" value={count.toString()} onChange={(e) => handleGoodCount(e)} />
        </div>
        </div>
    </div>
  </div >
}

export default Detail
