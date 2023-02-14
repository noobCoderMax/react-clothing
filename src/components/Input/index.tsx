import React from "react";
import s from './index.module.less'
import { CloseCircleOutlined,SearchOutlined } from '@ant-design/icons'
import NumberInput from "./NumberInput";
import SizeInput from "./SizeInput";
import AddressInput from "./AddressInput";

type Props = {
  value: string| string[],
  onChange: (value:string | number | string[]) => void,
  placeholder?: string ,
  type: 'text' | 'number' | 'main' | 'search' | "size" | "address" ,
  onclick?:()=>void
}
const Input: React.FC<Props> = ({ placeholder, value, onChange, type,onclick }) => {
  
  const returnInputByType = () => {
    switch (type) {
      case 'main':
        return <div>
          <input type="text" placeholder={placeholder} value={value} onChange={(e)=>onChange(e.target.value)} />
        </div>
        break;
      case 'text':
        return <div className={s.inputTotal}> 
        <input type={type} placeholder={placeholder} value={value} className={s.inputTotal_input} onChange={e => onChange?.(e.target.value)} />
        <div className={s.inputTotal_icon}>
         <CloseCircleOutlined />
        </div>
      </div>
        break;
      case 'search':
        return <div className={s.search}>
          <input type="text" value={value} onChange={e=>onChange?.(e.target.value)} placeholder={placeholder}/>
          <button onClick={onclick}><SearchOutlined /></button>
        </div>
        break;
      case 'number':
        return <NumberInput getValue={(e)=>onChange(e)}/>
        break;
      case 'size':
          return <SizeInput getValue={(e)=>onChange(e)}/>
        break;
      case 'address':
          return <AddressInput getValue={(e)=>onChange(e)}/>
        break;
      default:
        return <input type="text" />
    }
  }

  return (
    returnInputByType()
  )
}

export default Input