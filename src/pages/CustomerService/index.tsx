import { FC } from "react";
import Header from "../../components/Header";
import s from './index.module.less'

const CustomerService: FC = () => {
  return <div>
    <Header />
    <div className={s.service}>
      客服服务
      客服服装
    </div>
  </div>
}

export default CustomerService