import { FC } from 'react'
import s from './styles/CustomerInput.module.less'
import face from '../../assets/svgs/face.svg'
import photo from '../../assets/svgs/photo.svg'
import bag from '../../assets/svgs/bag.svg'
import { Button } from 'antd'

type Props = {
  getValue: (value: string) => void
}

type labelKind = {
  id: number,
  content: string
}

type totalLabels = {
  id: number,
  kind: string,
  children: labelKind[]
}

const CustomerInput: FC<Props> = ({ getValue }) => {

  const labalTotal: totalLabels[] = [
    {
      id: 1,
      kind: "comment",
      children: [
        {
          id: 1,
          content: "查看我的评价"
        },
        {
          id: 2,
          content: "如何评价"
        },
        {
          id: 3,
          content: "无法评价"
        },
        {
          id: 4,
          content: "查看信用等级"
        },
        {
          id: 5,
          content: "查看我的评价"
        },
        {
          id: 6,
          content: "查看我的评价"
        }, {
          id: 7,
          content: "查看我的评价"
        }, {
          id: 8,
          content: "查看我的评价"
        }, {
          id: 9,
          content: "查看我的评价"
        },
      ]
    },
    {
      id: 2,
      kind: "address",
      children: [
        {
          id: 1,
          content: "查看收获地址"
        },
        {
          id: 2,
          content: "修改收获地址"
        }, {
          id: 3,
          content: "未收到货"
        }, {
          id: 4,
          content: "快递不送货上门"
        },
      ]
    }
  ]

  return <div className={s.input}>
    <div className={s.input_label}>
      {
        labalTotal[0].children.map(item => {
          return <div
            key={item.id}
            className={s.input_label_item}
          >
            {item.content}
          </div>
        })
      }
    </div>
    <div className={s.input_content}>
      <img src={bag} alt="bag" />
      <img src={photo} alt="photo" />
      <img src={face} alt="face" />
      <input
        type="text"
        onChange={e => getValue(e.target.value)}
        placeholder="请输入想咨询的问题"
      />
      <Button style={{ height: "30px", margin: "5px" }}>发送</Button>
    </div>
  </div>
}
export default CustomerInput