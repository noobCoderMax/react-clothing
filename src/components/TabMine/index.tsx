import { FC, useState } from "react";
import s from './index.module.less'
import {
  Form,
  Input,
  Button,
  Radio,
  DatePicker,
} from 'antd';
import { useUserStore } from "../../store";
import { UserInfo } from "../../global";
import { Gender } from "../../pages/Mine";
import dayjs from 'dayjs';

const { TextArea } = Input;

const TabMine: FC = () => {
  const userInfo = useUserStore(state => state.userInfo)
  const [updateForm, setUpdateForm] = useState<UserInfo>({
    avator: userInfo.avator,
    email: userInfo.email,
    phone: '',
    nickname: '',
    gender: Gender.unknown,
    sign: '',
    tips: userInfo.tips,
    birth: "",
  })

  const submitForm = () => {
    console.log("TabMinePage", updateForm);
  }

  const resetForm = () => {
    setUpdateForm({
      avator: userInfo.avator,
      email: userInfo.email,
      nickname: '',
      gender: Gender.unknown,
      sign: '',
      birth: ""
    })
  }

  return <div className={s.tab}>
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
      disabled={false}
      style={{ maxWidth: 660 }}
    >
      <Form.Item label="用户昵称">
        <Input
          value={updateForm.nickname}
          placeholder="请输入您的昵称"
          onChange={e => setUpdateForm(pre => ({ ...pre, nickname: e.target.value }))}
        />
      </Form.Item>

      <Form.Item label="您的性别" name="gender">
        <Radio.Group
          value={updateForm.gender}
          onChange={e => setUpdateForm(pre => ({ ...pre, gender: e.target.value }))}
        >
          <Radio.Button value={Gender.male}>男士</Radio.Button>
          <Radio.Button value={Gender.fomale}>女士</Radio.Button>
          <Radio.Button value={Gender.unknown}>保密</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="我的签名">
        <TextArea
          rows={2}
          style={{ resize: 'none' }}
          placeholder="设置您的个人签名~"
          value={updateForm.sign}
          onChange={e => setUpdateForm(pre => ({ ...pre, sign: e.target.value }))}
        />
      </Form.Item>

      <Form.Item label="出生日期">
        <DatePicker
          format="YYYY-MM-DD"
          showTime={{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }}
          placeholder="选择您的生日"
          showToday={true}
          onOk={e => setUpdateForm(pre => ({ ...pre, birth: e!.format('YYYY-MM-DD') }))}
        />
      </Form.Item>

      <div className={s.submit}>
        <Button onClick={resetForm} style={{ marginRight: '10px' }}>重置</Button>
        <Button onClick={submitForm} type="primary" style={{ marginRight: '100px' }}>提交</Button>
      </div>
    </Form>
  </div>
}

export default TabMine
