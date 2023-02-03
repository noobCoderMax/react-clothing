import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import s from './index.module.less'

const Detail: React.FC = () => {
  const { state } = useLocation()

  // imgSrc,
  // price,
  // info,
  // tips,
  // id
  return <div>
    <Header />
    <div className={s.detail}>
      <div className={s.detail_show}>
        <img src={state.imgSrc} alt={state.id} />
      </div>
      <div className={s.detail_content}>
          <p className={s.detail_content_title}>{state.info}{state.info}</p>
      </div>
    </div>
  </div >
}

export default Detail
