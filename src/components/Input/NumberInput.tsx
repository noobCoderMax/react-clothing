import React, { useState } from "react";
import s from './styles/numberInput.module.less'
import decrease from '../../assets/svgs/decrease.svg'
import increase from '../../assets/svgs/increase.svg'
import ban from '../../assets/svgs/ban.svg'

type Props = {
  getValue:(value:number)=>void
}

const NumberInput: React.FC<Props> = (props) => {
  const { getValue} = props
  const [count, _setCount] = useState<number>(0)
  
  const setCount = (value:number) => {
    if (value <= 0) return
    _setCount(value)
  }

  const handleCount = (increase:boolean) => {
    increase === true ? setCount(count + 1) : setCount(count - 1)
    getValue(count)
  }

  return <div className={s.number}>
    <button className={s.number_left} onClick={() => handleCount(false)} disabled={count <= 1 ? true : false}>
    {
        count <= 1 ?
        <img src={ban} alt="禁止" style={{filter:"#7b7d7e"}}></img>
        :
        <img src={decrease} alt="decrease"></img>
      }
    </button>
    <input placeholder="1" value={count} onChange={(e)=>setCount(parseInt(e.target.value))}/>
    <button className={s.number_left} onClick={() => handleCount(true)}>
       <img src={increase} alt="decrease"></img>
    </button>
  </div>
}

export default NumberInput
