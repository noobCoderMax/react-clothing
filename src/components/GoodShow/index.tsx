import React from "react";
import { useNavigate } from "react-router-dom";
import s from './index.module.less'
type Props = {
  id:string,
  imgSrc: string,
  info: string,
  tips?:string[]
  price: string,
  images:string[]
}

const GoodShow: React.FC<Props> = ({ imgSrc, price, info, tips, id,images }) => {
  const navigate = useNavigate()

  // 跳转到详情页
  const goDetails = (id: string) => {
    navigate('/detail', {
      state: {
        imgSrc,
        price,
        info,
        tips,
        id,
        images
      },
      replace:false
    })
  }

  return <div className={s.show} onClick={()=>goDetails(id)}>
    <img src={imgSrc} alt="img" />
    <div className={s.show_content}>
      <div className={s.show_content_info}>{info}</div>
      {
        tips && <div className={s.show_content_tips}>
          {tips.map(item => {
            return <span key={item}>{item}</span>
          })}
        </div>
      }
      <div className={s.show_content_price}>￥<span>{price}</span></div>
    </div>
  </div>
}

export default GoodShow