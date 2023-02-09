import React, { useState } from "react";
import s from './styles/sizeInput.module.less'

type Props = {
  getValue:(value:string)=>void
}

const spanStyle: React.CSSProperties = {
  border:'1px solid red'
}

type Sizes = {
  id: number,
  value:string
}

const SizeInput: React.FC<Props> = (props) => {
  const [indexShow, setIndexShow] = useState<number>(1)
  const sizes: Array<Sizes> = [
    {
      id: 1,
      value: "S"
    },
    {
      id: 2,
      value: "M"
    },
    {
      id: 3,
      value: "L"
    },
    {
      id: 4,
      value: "XL"
    },
    {
      id: 5,
      value: "XXL"
    },
  ]
  
  const { getValue } = props

  return <div className={s.size}>
    {
      sizes.map((item,index) => {
        return <span
          style={index === indexShow ? spanStyle : {}}
          key={index}
          onClick={() =>
          {
            getValue(item.value),
            setIndexShow(index)
          }
          }
        >
          {item.value}
        </span>
      })
    }
  </div>
}
export default SizeInput