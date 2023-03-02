import React from "react";
import { useNavigate } from "react-router-dom";
import { GoodType } from "../../global";
import Card from "../FlipCard";
import s from './index.module.less'

type Props = {
  goodList: Array<GoodType>
}

const Ropular: React.FC<Props> = (props) => {
  const { goodList } = props
  const navigate = useNavigate()

  const handleToDetail = (item: GoodType) => {
    navigate('/detail', {
      state: {
        imgSrc: item.imgSrc,
        price: item.price,
        info: item.info,
        tips: item.tips,
        id: item.id,
        images: item.images
      },
      replace: false
    })
  }

  return <div className={s.popular}>
    {
      goodList.map(item => {
        return <div className={s.popular_item} key={item.id}>
          <div className={s.popular_item_img}>
            <Card front={item.images[0]} back={item.images[1]} />
          </div>
          <div className={s.popular_item_info} onClick={() => { handleToDetail(item) }}>
            <div className={s.popular_item_info_price}>￥{item.price}</div>
            <div className={s.popular_item_info_sales}>销量:  {item.sales}</div>
          </div>
        </div>
      })
    }
  </div>
}

export default Ropular