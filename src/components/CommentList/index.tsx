import React, { useState } from "react";
import { Comment } from '../../global'
import CommentInput from "../CommentInput";
import s from './index.module.less'

type Props = {
  commentList: Comment[],
  handleReply: (reply: string) => void
}

const CommentList: React.FC<Props> = (props) => {
  const { commentList, handleReply } = props
  const [showReply, setShowReply] = useState<boolean>(false)
  const [indexReply, setIndexReply] = useState<number>(0)

  const handleRepleMessage = (reply: string) => {
    handleReply(reply)
  }

  return <div className={s.list}>
    {
      commentList.map((item, index) => {
        return <div
          className={s.list_item}
          key={item.id}
        >
          <div className={s.list_item_show}>
            <img src={item.avator} alt={item.id.toString()} />
            <div className={s.list_item_show_info}>
              <div
                className={s.list_item_show_info_username}
              >
                <div>
                  <span
                    onClick={() => {
                      setShowReply(true),
                        setIndexReply(index)
                    }}
                  >{item.userName}</span>
                  <span>发布于:{item.createTime}</span>
                </div>
                {
                  showReply &&
                  indexReply === index &&
                  <button
                    className={s.miniBtn}
                    onClick={() => setShowReply(false)}
                  >
                    {!showReply ? "回复" : "取消"}
                  </button>
                }
              </div>
              <div className={s.list_item_show_info_content}>
                {item.content}
              </div>
            </div>
          </div>
          <div
            className={s.list_item_reply}
          >
            {
              showReply &&
              indexReply === index &&
              <CommentInput
                placeHolder="请输入回复内容"
                chooseImage={false}
                handleMessage={(e) => handleRepleMessage(e)}
                handleFinished={(value) => setShowReply(!value)}
              />
            }

          </div>
        </div>

      })
    }

  </div>
}
export default CommentList