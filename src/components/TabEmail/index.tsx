import { Button, Input } from 'antd'
import { FC, MouseEvent, useState } from 'react'
import { useUserStore } from '../../store'
import ButtonCountDown from '../Button'
import s from './index.module.less'

const TabEmail: FC = () => {
  const { email } = useUserStore(state => state.userInfo)
  const [emailChange, setEmailChange] = useState<{ email: string, code: string }>({
    email: "",
    code: ""
  })

  const handleCountDown = (value: boolean) => {
    if (value) {
      // 发送axios请求,获取邮箱验证码
      console.log("handleCountDown", value);
    }
  }

  const handleChangeEmail = () => {
    // 发送axios请求
    console.log("TabEmail", emailChange);
  }

  const resetForm = () => {
    setEmailChange({
      email: "",
      code: ""
    })
  }

  return <div className={s.tab}>
    <div className={s.tab_item}>
      <span>原邮箱: &nbsp; &nbsp;</span>
      <Input
        value={email}
        disabled
        placeholder={email}
        style={{ width: "300px" }}
      >
      </Input>
    </div>
    <div className={s.tab_item}>
      <span>新邮箱: &nbsp; &nbsp;</span>
      <Input
        value={emailChange.email}
        onChange={e => setEmailChange(pre => ({ ...pre, email: e.target.value }))}
        placeholder="请输入要换绑的邮箱"
        style={{ width: "300px" }}
      >
      </Input>
    </div>
    <div className={s.tab_item}>
      <span>验证码: &nbsp; &nbsp;</span>
      <div className={s.code}>
        <Input
          value={emailChange.code}
          placeholder="请输入邮箱验证码"
          maxLength={6}
          minLength={6}
          showCount={true}
          style={{ width: "230px" }}
          onChange={e => setEmailChange(pre => ({ ...pre, code: e.target.value }))}
        >
        </Input>
        <ButtonCountDown number={30} onText="发送" onClick={value => handleCountDown(value)} />
      </div>
    </div>
    <div className={s.tab_item} style={{ display: 'flex', justifyContent: 'end', width: "360px", gap: "10px" }}>
      <Button onClick={resetForm}>重置</Button>
      <Button onClick={handleChangeEmail}>保存</Button>
    </div>
  </div >
}

export default TabEmail