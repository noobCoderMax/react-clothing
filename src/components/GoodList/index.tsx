import React from "react";
import GoodShow from "../GoodShow";
import s from './index.module.less'

const GoodList: React.FC = () => {
  const goodList = [
    {
      id:'221',
      imgSrc: "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
      info: "台式电脑桌家用书桌书架一体简约现代学生桌子学习桌初中生办公桌",
      tips: ['超值新款', '火热销售'],
      price: '528',
      images: [
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p8.itc.cn/images03/20200520/4f35e960570f4c2f8c27b5993b958108.jpeg",
        "http://art.cfw.cn/upload/art_pic/2015/01/22/f379bde7-e26a-4c7e-a4a7-3e28676d3bdc.jpg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p7.itc.cn/images03/20200520/8246940bac3f4c1a860836769e210479.jpeg"]
    }, {
      id:'4211',
      imgSrc: "http://p8.itc.cn/images03/20200520/4f35e960570f4c2f8c27b5993b958108.jpeg",
      info:"台式电脑桌家用书桌书架一体简约现代学生桌子学习桌初中生办公桌",
      tips: ['超值新款', '火热销售'],
      price: '528',
      images: [
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg"]
    }, {
      id:'21121',
      imgSrc: "http://art.cfw.cn/upload/art_pic/2015/01/22/f379bde7-e26a-4c7e-a4a7-3e28676d3bdc.jpg",
      info: "台式电脑桌家用书桌书架一体简约现代学生桌子学习桌初中生办公桌",
      tips: ['超值新款', '火热销售'],
      price: '528',
      images: [
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg"]
    }, {
      id:'2221',
      imgSrc: "http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20200417/61c77c8f503a4404a1be926e22c6a343.jpeg",
      info: "台式电脑桌家用书桌书架一体简约现代学生桌子学习桌初中生办公桌",
      tips: ['超值新款', '火热销售'],
      price: '528',
      images: [
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg"]
    }, {
      id:'22112',
      imgSrc: "http://p7.itc.cn/images03/20200520/8246940bac3f4c1a860836769e210479.jpeg",
      info: "台式电脑桌家用书桌书架一体简约现代学生桌子学习桌初中生办公桌台式电脑桌家用书桌书架一体简约现代学生桌子学习桌初中生办公桌",
      tips: ['超值新款', '火热销售'],
      price: '528',
      images: [
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg"]
    }
  ]

  return <div className={s.good}>
    <div className={s.good_title}>
      <span>猜你喜欢</span>
      <span>个性推荐</span>
    </div>
    <div className={s.good_list}>
      {
        goodList.map((item,index)=> {
          return <GoodShow
            key={index}
            imgSrc={item.imgSrc}
            price={item.price}
            info={item.info}
            images={item.images}
            tips={item.tips ? item.tips : undefined} id={item.id}
            />;
        })
      }
    </div>
  </div>
}

export default GoodList