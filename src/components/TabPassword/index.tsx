import { Button, Input } from 'antd'
import { FC, useState } from 'react'
import s from './index.module.less'
import { message } from 'antd';

const TabPassword: FC = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const [passwordChange, setPasswordChange] = useState<{ oldPassword: string, newPassword: string, newPasswordCheck: string }>({
    oldPassword: "",
    newPassword: "",
    newPasswordCheck: ""
  })

  const handleChangePsw = () => {
    if (passwordChange.newPassword !== passwordChange.newPasswordCheck) {
      messageApi.warning('两次密码输入不一致，请重新输入！')
      return
    }

    // 发送axios请求
    console.log("TabPassword 修改密码", passwordChange);
  }

  const resetForm = () => {
    setPasswordChange({
      oldPassword: "",
      newPassword: "",
      newPasswordCheck: ""
    })
  }

  return <div className={s.tab}>
    {contextHolder}
    <div className={s.tab_item}>
      <span>旧密码: &nbsp; &nbsp;</span>
      <Input
        value={passwordChange.oldPassword}
        placeholder="请输入旧密码"
        onChange={e => setPasswordChange(pre => ({ ...pre, oldPassword: e.target.value }))}
        style={{ width: "300px" }}
      >
      </Input>
    </div>
    <div className={s.tab_item}>
      <span>新密码: &nbsp; &nbsp;</span>
      <Input
        value={passwordChange.newPassword}
        placeholder="请输入新密码"
        onChange={e => setPasswordChange(pre => ({ ...pre, newPassword: e.target.value }))}
        style={{ width: "300px" }}
      >
      </Input>
    </div>
    <div className={s.tab_item}>
      <span>新密码: &nbsp; &nbsp;</span>
      <Input
        value={passwordChange.newPasswordCheck}
        placeholder="请再次输入新密码"
        onChange={e => setPasswordChange(pre => ({ ...pre, newPasswordCheck: e.target.value }))}
        style={{ width: "300px" }}
      ></Input>
    </div>
    <div className={s.tab_item} style={{ display: 'flex', justifyContent: 'end', width: "360px", gap: "10px" }}>
      <Button onClick={resetForm}>重置</Button>
      <Button onClick={handleChangePsw}>保存</Button>
    </div>
  </div >
}

export default TabPassword
