import React, { useState } from "react";
import s from './index.module.less'
import { Button } from 'antd';
import smail from '../../assets/svgs/smail.svg'
import image from '../../assets/svgs/image.svg'
import EmojiList from "../EmojiList";

type Props = {
  placeHolder: string,
  chooseImage: boolean
  handleMessage: (value: string) => void,
  handleImage?: () => void,
  handleFinished?: (value: boolean) => void
}

const CommentInput: React.FC<Props> = (props) => {
  const { placeHolder, chooseImage = true, handleMessage, handleFinished } = props
  const [shouEmojiList, setShowEmojiList] = useState<boolean>(false)
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    handleMessage(message)
  }
  const sendImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]
    const reader = new FileReader()
    const typeReg = /\.(jpg|jpeg|png|JPG|PNG)$/
    if (!typeReg.test(e.target.value)) {
      alert('图片类型要求:jpeg、jpg、png')
      return false;
    }
    if (file.size / (1024 * 1024) > 1) {
      alert('图片大小不超过1M')
      return false;
    }
    reader.onload = (data) => {
      console.log("base64", data.target?.result);
    };
    reader.readAsDataURL(file);
  }
  return <div className={s.comment}>
    <div className={s.comment_top}>
      <img src={smail} alt="选择表情" onClick={() => setShowEmojiList(!shouEmojiList)} />
      {
        chooseImage &&
        <>
          <img src={image} alt="选择图片" />
          <input type="file" onChange={e => sendImages(e)} />
        </>
      }
      {
        shouEmojiList && <EmojiList onClick={e => setMessage(message + e)
        } />
      }
    </div>
    <div className={s.comment_bottom}>
      <textarea
        value={message}
        rows={6}
        placeholder={placeHolder}
        onChange={e => setMessage(e.target.value)}
      ></textarea>
      <div className={s.comment_bottom_btns}>
        <Button onClick={() => { handleSendMessage(), handleFinished!(true) }}>发送</Button>
        <Button onClick={() => setMessage('')}>清空</Button>
      </div>
    </div>
  </div>
}
export default CommentInput