import React, { useState } from "react";
import s from "./index.module.less"
import { message } from 'antd';

export type Props = {
  label: string,
  value: string[],
  getValue: (value: string | string[]) => void,
  confirmToSearch: (isRequest: boolean) => void
}

const CategoryInput: React.FC<Props> = (props) => {
  const { getValue, value, label, confirmToSearch } = props
  const [checkMore, setCheckMore] = useState<boolean>(false)
  const [messageApi, contextHolder] = message.useMessage()
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

  const handleToSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (temp.length <= 0) {
      messageApi.warning("您还未选择筛选类型！")
      return
    }
    confirmToSearch(true)
  }

  return <div className={s.CategoryInput}  >
    {contextHolder}
    <div className={s.CategoryInput_label} >{label} :</div>
    <div className={s.CategoryInput_checkbox}>
      {
        !checkMore ?
          <div>
            <div className={s.CategoryInput_checkbox_form}>
              {
                value.map((item, index) => {
                  return <span
                    className={s.item}
                    key={index}
                    onClick={() => getValue(item)}
                  >{item}</span>
                })
              }
              {!checkMore ?
                <div className={s.more} onClick={handleCheckMore}>更多</div> : null
              }
            </div>

          </div>
          :
          <form className={s.CategoryInput_checkbox_form}>
            {
              value.map((item, index) => {
                return <div key={index} className={s.item}>
                  <input
                    type="checkbox"
                    value={item}
                    style={{ marginRight: "4px" }}
                    onChange={() => handleValues(item)}
                  />
                  {item}
                </div>
              })
            }
            <div className={s.CategoryInput_checkbox_btns}>
              <button onClick={e => handleToSearch(e)}>提交</button>
              <button onClick={() => setCheckMore(false)}>取消</button>
            </div>
          </form>
      }

    </div>
  </div>
}

export default CategoryInput