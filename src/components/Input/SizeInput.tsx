import React, { useState } from "react";
import s from './styles/sizeInput.module.less'

type Props = {
  getValue:(value:string)=>void
}

const SizeInput: React.FC<Props> = (props) => {
  const sizes = ["S","M","L","XL","XXL"]
  const { getValue } = props

  return <div className={s.size}>
    {
      sizes.map((item,index) => {
        return <span key={index} onClick={()=>getValue(item)}>{item}</span>
      })
    }
  </div>
}
export default SizeInput