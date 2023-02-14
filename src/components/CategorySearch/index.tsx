import React, { useEffect, useState } from "react";
import s from './index.module.less'
import {DownOutlined,UpOutlined,RightOutlined} from '@ant-design/icons'
import Input from "../Input";
import CategoryInput from "../CategoryInput";

type Props = {

}

const CategorySearch: React.FC<Props> = (props) => {
  const {} = props
  const [conditionStyleHeight, setConditionStyleHeight] = useState<string>('200px')
  const [showCondition, setShowCondition] = useState<boolean>(false)
  const [season,setseason] = useState(["春季","夏季","秋季","冬季","四季"])
  const [size,setSize] = useState(["xxs","xs","s","m","l","xl","2xl","xxxl","xxxxl","xxxxl"])
  const [suitablePeople,setSuitablePeople] = useState(["青少年","青年","中年","老年"])

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

  const handleSeason = (seasonValue:string|string[]) => {
    console.log("seasonValue",seasonValue);
  }

  const handlePeople = (suitableValue:string|string[]) => {
    console.log("suitableValue",suitableValue);
  }

  const handleSize= (sizeValue:string|string[]) => {
    console.log("sizeValue",sizeValue);
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
            <CategoryInput label="适用季节" value={season} getValue={(e)=>handleSeason(e)}/>
            <CategoryInput label="适用对象" value={suitablePeople} getValue={(e)=>handlePeople(e)}/>
            <CategoryInput label="选择尺寸" value={size} getValue={(e)=>handleSize(e)}/>
          </div>
         </div>
      </div>
   </div>

  </div>
}

export default CategorySearch