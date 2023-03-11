import { FC, useState } from 'react'
import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  message
} from 'antd';
import Header from '../../components/Header'
import type { RangePickerProps } from 'antd/es/date-picker';
import s from './index.module.less'
import TextArea from 'antd/es/input/TextArea';
import { Gender } from '../Mine';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const range = (start: number, end: number) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

interface FeebBacKFormType {
  name: string,
  phone: string,
  gender: Gender.male | Gender.fomale | Gender.unknown,
  type: "系统问题" | "商家问题" | "服装问题" | "其他问题",
  content: string,
  time: string
}

const Feedback: FC = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const [feedBackForm, setFeedBackForm] = useState<FeebBacKFormType>({
    name: '',
    phone: '',
    gender: Gender.unknown,
    type: '系统问题',
    content: '',
    time: ''
  })

  const submitFeedback = () => {
    if (!checkFeedBack(feedBackForm)) {
      return
    }
    console.log("feedBack", feedBackForm);
  }

  const clearFeedback = () => {
    feedBackForm.content = ""
    feedBackForm.name = ""
    feedBackForm.phone = ""
    feedBackForm.time = ""
    feedBackForm.type = "系统问题"
    feedBackForm.gender = Gender.unknown
  }

  const checkFeedBack = (feedBack: FeebBacKFormType): boolean => {
    const checkPhone = /^(?:(?:\+|00)86)?1\d{10}$/.test(feedBack.phone)
    if (!checkPhone) {
      messageApi.warning('请您输入正确的联系方式！')
      return false
    }

    if (feedBack.name === "") {
      messageApi.warning('请您补全称呼！')
      return false
    }

    if (feedBack.content === "") {
      messageApi.warning('请您补全内容！')
      return false
    }

    if (feedBack.time === "") {
      messageApi.warning('请您选择时间！')
      return false
    }
    return true
  }

  // datePicker禁止选择的日期范围
  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    return current && current > dayjs().endOf('day');
  };

  // datePicker禁止选择的时间范围
  const disabledDateTime = () => {
    const date = new Date()
    const hours = date.getHours() + 1
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return {
      disabledHours: () => range(hours, 24),
      disabledMinutes: () => range(minutes, 60),
      disabledSeconds: () => [seconds, 60],
    }
  };

  return <div>
    {contextHolder}
    <Header />
    <div className={s.feedback}>
      <div className={s.feedback_layout}>
        <div className={s.feedback_layout_l}>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 19 }}
            layout="horizontal"
            initialValues={{ size: 'default' }}
            className={s.feedback_form}
          >
            <Form.Item label="您的姓名">
              <Input
                placeholder='请输入您的称呼'
                value={feedBackForm.name}
                onChange={e => setFeedBackForm(pre => ({ ...pre, name: e.target.value }))}
              />
            </Form.Item>
            <Form.Item label="联系方式">
              <Input
                placeholder='请输入您的联系电话'
                value={feedBackForm.phone}
                maxLength={11}
                showCount={true}
                onChange={e => setFeedBackForm(pre => ({ ...pre, phone: e.target.value }))}
              />
            </Form.Item>
            <Form.Item label="您的性别" name="gender">
              <Radio.Group
                value={Gender.unknown}
                onChange={e => setFeedBackForm(pre => ({ ...pre, gender: e.target.value }))}>
                <Radio.Button value={Gender.male}>男士</Radio.Button>
                <Radio.Button value={Gender.fomale}>女士</Radio.Button>
                <Radio.Button value={Gender.unknown}>保密</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="反馈类型">
              <Select onChange={value => setFeedBackForm(pre => ({ ...pre, type: value }))}>
                <Select.Option value="系统问题">系统问题</Select.Option>
                <Select.Option value="商家问题">商家问题</Select.Option>
                <Select.Option value="服装问题">服装问题</Select.Option>
                <Select.Option value="其他问题">其他问题</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="详细内容">
              <TextArea
                rows={7}
                placeholder='请输入反馈问题的详细内容,方便我们核实处理,以便解决您的问题'
                style={{ resize: 'none' }}
                value={feedBackForm.content}
                onChange={e => setFeedBackForm(pre => ({ ...pre, content: e.target.value }))}
              />
            </Form.Item>
            <Form.Item label="粗略时间">
              <DatePicker
                format="YYYY-MM-DD HH:mm:ss"
                showTime={{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }}
                placeholder='选择时间'
                showToday={true}
                disabledDate={disabledDate}
                disabledTime={disabledDateTime}
                style={{ width: "100%" }}
                onOk={e => setFeedBackForm(pre => ({ ...pre, time: e.format('YYYY-MM-DD HH:mm:ss') }))}
              />
            </Form.Item>
            <div className={s.submit}>
              <Button style={{ width: '100px', marginRight: '10px' }} onClick={clearFeedback}>清空</Button>
              <Button style={{ width: '100px' }} type='primary' onClick={submitFeedback}>提交</Button>
            </div>
          </Form>
        </div>
        <div className={s.feedback_layout_r}></div>
      </div>
    </div>
  </div>
}

export default Feedback
