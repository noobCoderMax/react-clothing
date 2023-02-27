import { GoodType } from "golbal";
import React, { useEffect, useState } from "react";
import CategoryList from "../../components/CategoryList";
import CategorySearch from "../../components/CategorySearch";
import Header from "../../components/Header";
import PopularrRcommend from "../../components/PopularRecomme";
import s from './index.module.less'

const Search: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>('')

  const goodList: Array<GoodType> = [
    {
      id: '221',
      imgSrc: "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
      info: "台式电脑桌家用书桌书架一体简约现代学生桌子学习桌初中生办公桌",
      tips: ['超值新款', '火热销售'],
      price: 528,
      sales: 213,
      images: [
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p8.itc.cn/images03/20200520/4f35e960570f4c2f8c27b5993b958108.jpeg",
        "http://art.cfw.cn/upload/art_pic/2015/01/22/f379bde7-e26a-4c7e-a4a7-3e28676d3bdc.jpg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p7.itc.cn/images03/20200520/8246940bac3f4c1a860836769e210479.jpeg"]
    }, {
      id: '4211',
      imgSrc: "http://p8.itc.cn/images03/20200520/4f35e960570f4c2f8c27b5993b958108.jpeg",
      info: "台式电脑桌家用书桌书架一体简约现代学生桌子学习桌初中生办公桌",
      tips: ['超值新款', '火热销售'],
      price: 399, sales: 10,
      images: [
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg"]
    }, {
      id: '21121',
      imgSrc: "http://art.cfw.cn/upload/art_pic/2015/01/22/f379bde7-e26a-4c7e-a4a7-3e28676d3bdc.jpg",
      info: "台式电脑桌家用书桌书架一体简约现代学生桌子学习桌初中生办公桌",
      tips: ['超值新款', '火热销售'],
      price: 999, sales: 123,
      images: [
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg"]
    }, {
      id: '2221',
      imgSrc: "http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20200417/61c77c8f503a4404a1be926e22c6a343.jpeg",
      info: "台式电脑桌家用书桌书架一体简约现代学生桌子学习桌初中生办公桌",
      tips: ['超值新款', '火热销售'],
      price: 199, sales: 13,
      images: [
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg"]
    }, {
      id: '22112',
      imgSrc: "http://p7.itc.cn/images03/20200520/8246940bac3f4c1a860836769e210479.jpeg",
      info: "台式电脑桌家用书桌书架一体简约现代学生桌子学习桌初中生办公桌台式电脑桌家用书桌书架一体简约现代学生桌子学习桌初中生办公桌",
      tips: ['超值新款', '火热销售'],
      price: 288, sales: 223,
      images: [
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg",
        "http://p5.itc.cn/images03/20200520/0a4851877979470a81bd7136fbfdae7e.jpeg"]
    }
  ]

  useEffect(() => {
    console.log("searchInput", searchInput);
  }, [searchInput])

  return <div>
    <Header />
    <div className={s.search}>
      <div className={s.search_top}>
        <div className={s.search_top_input}>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="请输入搜索内容" />
          <button>搜索</button>
        </div>
      </div>

      <div className={s.search_list}>
        <div className={s.search_list_left}>
          <CategorySearch
            getSearchInput={(e) => setSearchInput(e)}
          />
          <CategoryList goodList={goodList} />
        </div>
        <div className={s.search_list_right}>
          <PopularrRcommend goodList={goodList} />
        </div>
      </div>

    </div>
  </div>
}

export default Search