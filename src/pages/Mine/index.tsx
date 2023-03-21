import React, { Suspense, useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import s from './index.module.less'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import TabMine from "../../components/TabMine";
import TabLike from "../../components/TabLike";
import TabHistory from "../../components/TabHistory";
import { uploadQn, uploadUrl } from "../../api/other/qiniu";
import { UserInfo } from "../../global";
import Loading from "../../components/Loading";
import TabEmail from "../../components/TabEmail";
import { linkUrl } from "../../utils/uploader";
import { useUserStore } from "../../store";
import TabPassword from "../../components/TabPassword";
import TabAddress from "../../components/TabAddress";

export enum Gender {
  male = 0,
  fomale = 1,
  unknown = -1,
}

const spanBgc = ['#02b5da', '#5fd4f2', '#f3a034', '#fbc7f5']

const Mine: React.FC = () => {
  const { userInfo, getToken, setUserInfo } = useUserStore()

  const [title, setTitle] = useState<string>('')
  const [user, setUser] = useState<UserInfo>({
    avator: "http://test.kuugacoder.top/szr1.jpeg",
    nickname: "明天会更好吗",
    gender: 1,
    email: "1914275425@qq.com",
    sign: "你每天会忘记上千件事，为何不把这件事也忘了?",
    tips: ['新用户', 'VIP', '服装新秀'],
    birth: "",
    phone: "",
    age: 0,
    userName: ""
  })

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `我的信息`,
      children: <TabMine />,
    },
    {
      key: '2',
      label: `我的收藏`,
      children: <TabLike />,
    },
    {
      key: '3',
      label: `我的足迹`,
      children: <TabHistory />,
    },
    {
      key: '4',
      label: `邮箱换绑`,
      children: <TabEmail />,
    },
    {
      key: '5',
      label: `更换密码`,
      children: <TabPassword />,
    },
    {
      key: '6',
      label: "收获地址",
      children: <TabAddress />
    }
  ];

  useEffect(() => {
    console.log("send request");
    console.log("title", title);
  }, [user, title])


  const onChange = (key: string) => {
    console.log(key);
  };
  const updateAvator = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]
    const typeReg = /\.(jpg|jpeg|png|JPG|PNG)$/
    if (!typeReg.test(e.target.value)) {
      alert('图片类型要求:jpeg、jpg、png')
      return false;
    }
    if (file.size / (1024 * 1024) > 1) {
      alert('图片大小不超过1M')
      return false;
    }
    // const reader = new FileReader()
    // reader.onload = (data) => {
    //   console.log("base64", data.target?.result);
    // };
    // reader.readAsDataURL(file);
    const res = await uploadQn(file)
    const temp = linkUrl(res.data.key)
    setUser(pre => ({ ...pre, avator: temp }))
  }

  return <div>
    <Header />
    <div className={s.mine}>
      <div className={s.mine_info}>
        <img src={user.avator} alt="avator" title="点击更改头像" />
        <input type="file" className={s.mine_info_file} onChange={(e) => updateAvator(e)} />
        <div className={s.mine_info_name}>{user.nickname}</div>
        <div className={s.mine_info_tips}>
          {
            user.tips!.map((item, index) => {
              return <span key={item} style={{ backgroundColor: spanBgc[index] }}>{item}</span>
            })
          }
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Suspense>
    </div>
  </div>
}

export default Mine