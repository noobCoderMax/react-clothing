import React, {useState } from "react";
import s from "./index.module.less"

export type Props = {
  label: string,
  value:string[],
  getValue: (value: string|string[]) => void
}

const CategoryInput: React.FC<Props> = (props) => {
  const {getValue,value,label} = props
  const [checkMore, setCheckMore] = useState<boolean>(false)
  let temp = new Array
  
  // 切换为多选或单选
  const handleCheckMore = () => {
    setCheckMore(checkMore => !checkMore)
  }

  const handleValues = (value: string) => {
    if (temp.includes(value)) {
      temp.splice(temp.indexOf(value), 1)
      getValue(temp)    
      return
    }
    temp.push(value)
    getValue(temp)    
  }

  return <div className={s.CategoryInput}>
    <div className={s.label}>{label} :</div>
    <div className={s.CategoryInput_checkbox}>
    {
      !checkMore ? 
      <div className={s.CategoryInput_checkbox_form}>
        {
            value.map((item,index) => {
              return <span
                className={s.item}
                key={index}
                onClick={() => getValue(item)}
              >{item}</span>
            })    
        }    
      </div>
      :
        <form className={s.CategoryInput_checkbox_form}>
          {
            value.map((item,index)=>{
              return <div key={index} className={s.item}>
                <input
                  type="checkbox"
                  value={item}
                  style={{ marginRight: "4px" }}
                  onChange={()=>handleValues(item)}
                />
                 {item}
              </div>
            })
          }
        </form> 
      }
        <div className={s.more} onClick={handleCheckMore}>更多</div>
   </div>
  </div>
}

export default CategoryInput