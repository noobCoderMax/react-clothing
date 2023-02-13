import React, { useState } from "react";
import s from './styles/CategoryInput.module.less'

type Props = {
  value:string[],
  getValue:(value:string[] | string)=>void
}

const CategoryInput: React.FC<Props> = (props) => {
  const {getValue,value} = props
  const [season, setseason] = useState(["春季", "夏季", "秋季", "冬季", "四季"])
  const [checkMore,setCheckMore] = useState<boolean>(false)

  return <div className={s.CategoryInput}>
    {
      checkMore ? 
      <div>
        {
            value.map((item,index) => {
              return <span key={index}>{item}</span>
            })    
        }    
      </div>
      :
        <form>
          {
            value.map((item,index)=>{
              return <input type="checkbox" value={item} />
            })
          }
        </form> 
    }
  </div>
}

export default CategoryInput