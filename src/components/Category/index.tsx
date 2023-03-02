import React from "react";
import s from './index.module.less'
type Props = {
  categoryList: string[][]
}

const Category: React.FC<Props> = ({ categoryList }) => {
  const getValue = (value: string) => {
    console.log("value", value);
  }

  return <div className={s.category}>
    <h3 className={s.category_title}>分类</h3>
    <div>
      <ul>
        {
          categoryList.map((item, index) => {
            return <li key={index}>
              {
                item.map((i, index) => {
                  return <span
                    key={i}
                    onClick={e => getValue(i)}>{i}
                    {index - 2 ? <i className={s.txt}>/</i> : null}
                  </span>
                })
              }
            </li>
          })
        }
      </ul>
    </div>
  </div>
}

export default Category