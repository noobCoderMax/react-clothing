import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import s from './index.module.less'


const Checkout: React.FC = () => {
  const [store,setStore]= useState([])
  
  useEffect(() => {
    
  },[store])

  return <div >
    <Header/>
    <div className={s.checkout}>
    checkOut
  </div>
  </div>
}

export default Checkout