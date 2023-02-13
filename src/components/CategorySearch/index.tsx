import React, { useEffect, useState } from "react";
import s from './index.module.less'
import {DownOutlined,UpOutlined,RightOutlined} from '@ant-design/icons'
import Input from "../Input";

type Props = {

}

const CategorySearch: React.FC<Props> = (props) => {
  const {} = props
  const [conditionStyleHeight, setConditionStyleHeight] = useState<string>('200px')
  const [showCondition, setShowCondition] = useState<boolean>(false)
  const [season,setseason] = useState(["春季","夏季","秋季","冬季","四季"])

  useEffect(() => {
    if (showCondition) {
      setConditionStyleHeight('500px')
    } else  {
      setConditionStyleHeight('200px')
    }
  },[showCondition])
  
  const handleShowCondition = (isShow: boolean) => {
    isShow ? setShowCondition(true) : setShowCondition(false)
  }

  const handleSeason = () => {
    
  }

  return <div className={s.category}>
    <div className={s.category_kind}>
      <div className={s.category_kind_condition}>
        <div
          className={s.conditionList}
          style={
            {
              height: conditionStyleHeight
            }
          }
        >
          <div className={s.conditionList_top}>
            <span className={s.span}>所有分类<RightOutlined /></span>  
            {
                showCondition === false?
                <span className={s.span} onClick={()=>handleShowCondition(true)}>
                   显示筛选 <DownOutlined />
                </span>
                :
                <span className={s.span} onClick={()=>handleShowCondition(false)}>
                   收起筛选 <UpOutlined />
                </span>
              }
          </div>

          <div className={s.conditionList_content}>
                <Input type="category" value={season} onChange={(e)=>handleSeason}/>
          </div>
         </div>
      </div>
   </div>

  </div>
}

export default CategorySearch