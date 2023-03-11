import React, { useState } from "react";
import { Carousel } from 'antd';
import Header from "../../components/Header";
import s from "./index.module.less";
import Footer from "../../components/Footer";
import Category from "../../components/Category";
import MineCard from "../../components/MineCard";
import GoodList from "../../components/GoodList";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '300px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Home: React.FC = () => {
  const [index, setIndex] = useState<number>(0)
  const swipperItem = [
    {
      id: 1,
      imgSrc: "http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20181105/fbb757cf0e62490baf8efe27b7542d3e.jpeg",
      label: "学院风"
    },
    {
      id: 2,
      imgSrc: "http://www.cfw.cn/editors/attached/image/20160419/20160419094785198519.jpg",
      label: "休闲风格"
    },
    {
      id: 3,
      imgSrc: "https://icweiliimg1.pstatp.com/weili/bl/262223172430201002.jpg",
      label: "朋克风格"
    },
    {
      id: 4,
      imgSrc: "http://img1.gtimg.com/fashion/pics/hv1/227/211/1709/111181757.jpg",
      label: "民族风"
    }
  ]
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

  const onChange = (currentIndex: number) => {
    setIndex(currentIndex)
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
              {swipperItem[index].label}
            </div>
            <Carousel afterChange={onChange} autoplay={true}>
              {
                swipperItem.map(item => {
                  return <div key={item.id}>
                    <img style={contentStyle} src={item.imgSrc} alt={item.label} />
                  </div>
                })
              }
            </Carousel>
          </div>
          <div className={s.home_top_mine}>
            <MineCard />
          </div>
        </div>
        <GoodList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
