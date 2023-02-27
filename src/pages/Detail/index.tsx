import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ClothingShow from "../../components/ClothingShow";
import Header from "../../components/Header";
import s from './index.module.less'
import { Comment } from 'golbal'
import { StarOutlined } from '@ant-design/icons'
import Input from "../../components/Input";
import CommentInput from "../../components/CommentInput";
import CommentList from "../../components/CommentList";
import { useUserStore } from "../../store";

const starStyle: React.CSSProperties = {
  color: '#ff8f1c',
}

const tempCommentList: Comment[] = [
  {
    id: 1,
    userName: "宋祖儿",
    avator: "http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg",
    content: "这个衣服还不错",
    createTime: "2023-02-26"
  },
  {
    id: 2,
    userName: "宋丹丹",
    avator: "http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg",
    content: "好评，下次还来买！！",
    createTime: "2023-02-26"
  },
  {
    id: 3,
    userName: "宋小宝",

    avator: "http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg",
    content: "大家买的质量都怎么样？",
    createTime: "2023-02-26"
  },
  {
    userName: "李白",
    id: 4,
    avator: "http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg",
    content: "还不错哟",
    createTime: "2023-02-26"
  }
]
const Detail: React.FC = () => {
  const userInfo = useUserStore(state => state.userInfo)
  console.log("userInfo", userInfo);

  const { state } = useLocation()
  const [count, setCount] = useState<number>(0)
  const [size, setSize] = useState<string>("")
  const [address, setAddress] = useState<string>("")

  const CollectionItem = (id: string) => {
    alert(`收藏物品接口-Detail-Components:id=${id}`)
  }

  useEffect(() => {
    console.log("count", count);
    console.log("size", size);
    console.log("address", address);
  }, [count, size, address])

  const handleGoodCount = (count: string | number) => {
    setCount(count = typeof count === "number" ? count : parseInt(count))
  }

  const handleGoodSize = (size: string | number) => {
    setSize(size = typeof size === "string" ? size : size.toString())
  }

  const handleGoodAddress = (address: string | number) => {
    setAddress(address = typeof address === "string" ? address : address.toString())
  }

  const handleToCart = () => {
    console.log("加入购物车");
  }

  const handleComment = (value: string) => {
    console.log("发布评论内容", state.id, value);
  }

  const handleBuy = () => {
    //useNavigate to buy Page
    console.log("立刻购买");
  }

  const handleReply = (reply: string) => {
    // 商品id
    let id = state.id
    console.log("处理用户评论-Detail", reply);
  }

  return <div>
    <Header />
    <div className={s.main}>
      <div className={s.detail}>
        <div className={s.detail_show}>
          <ClothingShow images={state.images} />
          <div className={s.detail_show_like} onClick={() => CollectionItem(state.id)}>
            <StarOutlined style={starStyle} />
            <span>收藏宝贝</span>
          </div>
        </div>
        <div className={s.detail_content}>
          <p className={s.detail_content_title}>{state.info}</p>
          <div className={s.detail_content_tips}>
            {
              state.tips.map((item: string) => {
                return <span key={item}>{item}</span>
              })
            }
          </div>
          <div className={s.detail_content_price}>
            <span>超值价格:</span>￥<span>{state.price}</span>
          </div>

          <div className={s.detail_content_address}>
            <div className={s.label}>地址   :</div>
            <Input type="address" value={address} onChange={(e) => handleGoodAddress(e)} />
          </div>


          <div className={s.detail_content_size}>
            <div className={s.label}>尺码   :</div>
            <Input type="size" value={size} onChange={(e) => handleGoodSize(e)} />
          </div>

          <div className={s.detail_content_count}>
            <div className={s.label}>数量   :</div>
            <Input type="number" value={count.toString()} onChange={(e) => handleGoodCount(e)} />
          </div>

          <div className={s.detail_content_btns}>
            <button onClick={() => handleBuy}>立刻购买</button>
            <button onClick={() => handleToCart}>加入购物车</button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <CommentInput
          placeHolder="请输入评论，请勿输入违法违规或不文明的内容"
          chooseImage={false}
          handleMessage={e => handleComment(e)}
        />
        <CommentList
          commentList={tempCommentList}
          handleReply={(reply) => handleReply(reply)}
        />
      </div>
    </div>

  </div >
}

export default Detail
