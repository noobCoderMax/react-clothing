import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Commodity from "./Commodity";
import s from './styles/index.module.less'


const Checkout: React.FC = () => {
  const [store,setStore]= useState([])
  const [totalPrice,setTotalPrice] = useState<number>(0.00)


  useEffect(() => {
    
  },[store])

  return <div >
    <Header/>
    <div className={s.checkout}>
      <div className={s.checkout_header}>
        <div>购物车   (全部{3})</div>
        
        <div className={s.checkout_header_right}>
          <div className={s.checkout_header_right_totalPrice}>
            <span>已选商品</span>
            {totalPrice}
          </div>
          <button>结算</button>
        </div>
      </div>

      <Commodity/>
    </div>
  </div>
}

export default Checkout