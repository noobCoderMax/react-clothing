import { FC, useEffect, useState } from "react";
import s from './index.module.less'
import {
  Button,
  Input,
  Pagination,
  Select,
} from 'antd';
import { Collection } from "../../global";
import { useNavigate } from "react-router-dom";

const inputStyle: React.CSSProperties = {
  width: '120px',
}
const mood = ['恐惧', "悲伤", "自卑", "快乐", "抑郁", "忧郁", "焦虑", "易怒"]
const style = ["街头风", "田园风", "古装风", "简约风", "学院风", "波西米亚风", "中性风", "BM风", "中国风", "民族风", "解构风", "哥特风", "北欧极简风", "洛可可风", "朋克风", "运动风"]

const TabLike: FC = () => {
  const [likeForm, setlikeForm] = useState<{ title: string, style: string, mood: string, currentPage: number, pageSize: number }>({
    title: "",
    style: style[0],
    mood: mood[0],
    currentPage: 1,
    pageSize: 12
  })


  let collectionDataTemp: Collection[] = [
    {
      id: "1",
      img: "http://test.kuugacoder.top/Fo6xDVBAUC-rrwDk6VRe_FhfYtgC",
      title: "中国风",
      style: "中国风",
      mood: "开心",
      createTime: "2023-03-13"
    },
    {
      id: "2",
      img: "http://test.kuugacoder.top/clothingkHFb-Yoo04zFYNG6nfMwH",
      title: "中国风",
      style: "中国风",
      mood: "开心",
      createTime: "2023-03-13"
    },
    {
      id: "3",
      img: "http://test.kuugacoder.top/clothingXK_kJWstObawW0lKYzVFj",
      title: "中国风",
      style: "中国风",
      mood: "开心",
      createTime: "2023-03-13"
    },
    {
      id: "4",
      img: "http://test.kuugacoder.top/clothingAcM4PiE5zkzAJ7TsHgp8b",
      title: "中国风",
      style: "中国风",
      mood: "开心",
      createTime: "2023-03-13"
    },
    {
      id: "5",
      img: "http://test.kuugacoder.top/clothing6hY69gqhcg5rJYZXOOX8v",
      title: "中国风",
      mood: "开心", style: "中国风",
      createTime: "2023-03-13"
    },
    {
      id: "6",
      img: "http://test.kuugacoder.top/FtslQR2B89M44Qyj-xwmFMR01tzF",
      title: "中国风",
      mood: "开心", style: "中国风",
      createTime: "2023-03-13"
    },
    {
      id: "7",
      img: "http://test.kuugacoder.top/cat1.png",
      title: "中国风",
      style: "中国风",
      mood: "开心",
      createTime: "2023-03-13"
    },
    {
      id: "8",
      img: "http://test.kuugacoder.top/cat.png",
      title: "中国风",
      style: "中国风",
      mood: "开心",
      createTime: "2023-03-13"
    }, {
      id: "9",
      img: "http://test.kuugacoder.top/img7.jpg",
      title: "中国风",
      style: "中国风",
      mood: "开心",
      createTime: "2023-03-13"
    }
  ]

  useEffect(() => {
    //初始化发送请求 
  }, [])

  const handleSubmit = () => {
    console.log("likeForm", likeForm);
    // 重新请求数据
  }

  const resetSubmit = () => {
    setlikeForm({
      title: "",
      style: style[0],
      mood: mood[0],
      currentPage: 1,
      pageSize: 12
    })
  }

  const handlePage = (page: number, size: number) => {
    setlikeForm(pre => ({
      ...pre,
      currentPage: page,
      pageSize: size
    }))
  }

  return <div className={s.tab}>
    <div className={s.tab_filter}>
      <div>
        <span className={s.label}>名称</span>
        <Input
          style={inputStyle}
          placeholder="服装名称"
          value={likeForm.title}
          onChange={e => setlikeForm(pre => ({ ...pre, title: e.target.value }))}
        ></Input>
      </div>
      <div>
        <span className={s.label}>风格</span>
        <Select
          style={inputStyle}
          placeholder="服装风格"
          value={likeForm.style}
          onChange={value => setlikeForm(pre => ({ ...pre, style: value }))}
        >
          {
            style.map((item, index) => {
              return <Select.Option value={item} key={index}>{item}</Select.Option>
            })
          }
        </Select>
      </div>
      <div>
        <span className={s.label}>情绪</span>
        <Select
          style={inputStyle}
          placeholder="服装适用情绪"
          value={likeForm.mood}
          onChange={value => setlikeForm(pre => ({ ...pre, mood: value }))}
        >
          {
            mood.map((item, index) => {
              return <Select.Option value={item} key={index}>{item}</Select.Option>
            })
          }
        </Select>
      </div>

      <div className={s.tab_filter_btn}>
        <Button onClick={handleSubmit}>确认</Button>
        <Button onClick={resetSubmit}>重置</Button>
      </div>
    </div>
    <div className={s.tab_list}>
      <TabLikeData likeData={collectionDataTemp} />
    </div>
    <div className={s.page}>
      <Pagination
        defaultCurrent={1}
        hideOnSinglePage={false}
        total={300}
        current={likeForm.currentPage}
        pageSize={likeForm.pageSize}
        showQuickJumper
        onChange={(page, pageSize) => handlePage(page, pageSize)}
      />
    </div>
  </div>
}

export default TabLike


type TabLikeDataProps = {
  likeData: Collection[]
}

const TabLikeData: FC<TabLikeDataProps> = ({ likeData }) => {
  const nav = useNavigate()

  const handleToDetail = (id: string) => {
    alert('前往收藏服装详情页接口 TabLikeData Components')
  }

  return <div className={s.like}>
    {
      likeData.map(item => {
        return <div key={item.id} className={s.like_item}>
          <img
            className={s.like_item_img}
            src={item.img}
            alt={item.title}
            title={item.title}
            onClick={() => handleToDetail(item.id)}
          />
          <div className={s.like_item_title}>{item.title}</div>
          <div className={s.like_item_style}>{item.style}</div>
          <div className={s.like_item_mood}>{item.mood}</div>
          <div className={s.like_item_time}>收藏于&nbsp;{item.createTime} &nbsp;</div>
        </div>
      })
    }
  </div>
}