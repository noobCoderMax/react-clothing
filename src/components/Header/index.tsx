import React from "react";
import { useNavigate } from "react-router-dom";
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
  } ,{
    id: 4,
    name: "我的信息",
    icon: "",
    link: "/mine",
  },
];

const Header: React.FC = () => {
  const navigate = useNavigate()

  const linkTo = (router:string) => {
    navigate(router)
  }
  s.header_router
  return <div className={s.position}>
    <div className={s.header}>
      <div className={s.header_icon}>icon</div>
      {
        routeItems.map(item => {
          return <div className={s.header_router} key={item.id} onClick={()=>linkTo(item.link)}>{item.name}</div>
        })
      }
      <div className={s.header_nickname}>loginout/id</div>
    </div>
  </div>;
};

export default Header;
