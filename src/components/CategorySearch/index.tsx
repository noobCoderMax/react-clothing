import React, { useEffect, useState } from "react";
import s from './index.module.less'
import {DownOutlined,UpOutlined,RightOutlined} from '@ant-design/icons'

const CategorySearch: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const [showCondition, setShowCondition] = useState<boolean>(false)

  let conditionStyleHeight = "200px"

  useEffect(() => {
    if (showCondition) {
      conditionStyleHeight = '500px'
    } else {
      conditionStyleHeight = '200px'
    }
  },[setShowCondition])
  
  const handleShowCondition = (isShow: boolean) => {
    isShow ? setShowCondition(true) : setShowCondition(false)
  }

  return <div className={s.category}>
    <div className={s.category_top}>
      <div className={s.category_top_input}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="请输入搜索内容"/>
        <button>搜索</button>
      </div>
    </div>

    
    <div className={s.category_kind}>
      <div className={s.category_kind_condition}>
        <div className={s.conditionList} style={{
          height:conditionStyleHeight
        }}>
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

         </div>
      </div>
      <div className={s.category_kind_recommend}>3</div>
   </div>

  </div>
}

export default CategorySearch