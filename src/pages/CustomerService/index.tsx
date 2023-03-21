import { FC, useEffect, useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import s from './index.module.less'

const CustomerService: FC = () => {
  const [input, setInput] = useState<string>("")

  useEffect(() => {
    console.log("input", input);
  }, [input])

  return <div>
    <Header />
    <div className={s.service}>
      <div className={s.service_title}>
        <img src="http://test.kuugacoder.top/taobaoIcon.png" alt="customer" />
        <div className={s.service_info}>
          官方客服(7:00 - 次日1:00)
        </div>
      </div>

      <div className={s.service_content}>
        <ul>
          <li>20</li>
          <li>20</li>
          <li>20</li>
          <li>20</li>
          <li>20</li>
          <li>20</li>
          <li>20</li>
          <li>20</li>
          <li>20</li>
          <li>20</li>
          <li>20</li>
          <li>20</li>
          <li>20</li>
          <li>20</li>
          <li>20</li>
          <li>20</li>
          <li>20</li>
          <li>20</li>
          <li>20</li>
          <li>20</li>
        </ul>
      </div>
      <div className={s.service_input}>
        <Input type="customer" value={input} onChange={value => setInput(typeof value === "string" ? value : value.toString())} />
      </div>
    </div>
  </div>
}

export default CustomerService