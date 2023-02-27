import React, { useState } from "react";
import { Carousel } from 'antd';
import Header from "../../components/Header";
import Tabs, { Tab } from "../../components/Tabs";
import s from "./index.module.less";
import Footer from "../../components/Footer";
import Category from "../../components/Category";
import MineCard from "../../components/MineCard";
import GoodList from "../../components/GoodList";;

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '300px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  borderRadius: '10px',
};

const Home: React.FC = () => {
  const tabs: Tab[] = [
    {
      title: "游戏",
      element: <div>游戏</div>,
    },
    {
      title: "电影",
      element: <div>电影</div>,
    },
    {
      title: "小说",
      element: <div>小说</div>,
    },
  ];

  const [value, _setValue] = useState('')

  const setValue = (value: string) => {
    console.log(value);
    _setValue(value)
  }

  const categoryList = [
    ['女装', '内衣', '奢品'],
    ['女鞋', '男鞋', '箱包'],
    ['美妆', '饰品', '洗护'],
    ['男装', '运动', '百货'],
    ['手机', '数码', '企业礼品'],
    ['家装', '电器', '车品'],
    ['食品', '生鲜', '母婴'],
    ['医药', '保健', '进口'],
  ]

  const onChange = (currentSlide: number) => {
    // console.log(currentSlide);
  };

  return (
    <div className={s.index}>
      <Header />
      <div className={s.home}>
        <div className={s.home_top}>
          <div className={s.home_top_category}>
            <Category categoryList={categoryList} />
          </div>
          <div className={s.home_top_swipper}>
            <div className={s.home_top_swipper_title}>
              轮播图标题
            </div>
            <Carousel afterChange={onChange} autoplay={true}>
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
            </Carousel>
          </div>
          <div className={s.home_top_mine}>
            <MineCard />
          </div>
        </div>
        <GoodList />

        <Tabs tabs={tabs} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
