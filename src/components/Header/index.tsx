import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store";
import { Button, Modal } from 'antd';
import s from "./index.module.less";
type routeLink = {
  id: number;
  name: string;
  icon: any;
  link: string;
};

const routeItems: routeLink[] = [
  {
    id: 1,
    name: "首页",
    icon: "",
    link: "/index",
  },
  {
    id: 2,
    name: "购物车",
    icon: "",
    link: "/checkout",
  },

  {
    id: 3,
    name: "消息",
    icon: "",
    link: "/chat",
  }, {
    id: 4,
    name: "我的信息",
    icon: "",
    link: "/mine",
  },
  {
    id: 5,
    name: "搜索",
    icon: "",
    link: "/search"
  }
];

const Header: React.FC = () => {
  const navigate = useNavigate()
  const useInfo = useUserStore(state => state.userInfo)
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log("userInfo-useUserStore", useInfo);

  const linkTo = (router: string) => {
    navigate(router)
  }

  const handleToLogin = () => {
    navigate('/login')
  }

  const handleLoginOut = () => {
    setIsModalOpen(true);
  }

  const handleOk = () => {
    setIsModalOpen(false);
    navigate('/login')
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleToMine = () => {
    navigate("/mine")
  }
  s.header_router
  return <div className={s.position}>
    <div className={s.header}>
      <div className={s.header_icon}>icon</div>
      {
        routeItems.map(item => {
          return <div className={s.header_router} key={item.id} onClick={() => linkTo(item.link)}>{item.name}</div>
        })
      }
      <div className={s.header_nickname}>
        {
          useInfo ?
            <div className={s.login_true} onClick={handleLoginOut}>
              <img className={s.login_true_avator} src={useInfo.avator} alt="avator" onClick={handleToMine} />
              <div className={s.login_true_username}>{useInfo.nickname}</div>
            </div>
            :
            <div className={s.login_false}>
              <div className={s.btn} onClick={handleToLogin}>
                未登录,前往登录
              </div>
            </div>
        }
      </div>
    </div>

    <Modal
      title="提示"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      cancelText="取消退出"
      okText="确定退出"
    >
      <p>确定退出吗?</p>
    </Modal>
  </div>;
};

export default Header;
