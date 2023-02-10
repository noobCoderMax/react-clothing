import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import s from './index.module.less'
import { Button } from 'antd';
import smail from '../../assets/svgs/smail.svg'
import image from '../../assets/svgs/image.svg'
import EmojiList from "../../components/EmojiList";

const Chat: React.FC = () => {
  const messageBox = useRef<HTMLDivElement|null>(null)
  const [chatList, setChatList] = useState([
    {
      id: 1,
      avator: "http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg",
      nickname: "今天",
      chatLastestTime:"2023-02-02"
    },
    {
      id: 2,
      avator: "http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg",
      nickname: "明天",
      chatLastestTime:"2023-02-02"
    },
    {
      id: 3,
      avator: "http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg",
      nickname: "lastDay",
      chatLastestTime:"2023-02-02"
    },
    {
      id:4,
      avator: "http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg",
      nickname: "小满",
      chatLastestTime:"2023-02-02"
    },
    {
      id: 5,
      avator: "http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg",
      nickname: "Day",
      chatLastestTime:"2023-02-02"
    },
    {
      id:6,
      avator: "http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg",
      nickname: "宋小宝",
      chatLastestTime:"2023-02-02"
    },
    {
      id: 7,
      avator: "http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg",
      nickname: "宋祖儿",
      chatLastestTime:"2023-02-02"
    }
  ])
  const [searchInput, setInput] = useState<string>('')
  const [message, setMessage] = useState('')
  const [shouEmojiList,setShowEmojiList] = useState<boolean>(false)
  const [messageList, setMessageList] = useState([
    {
      id: 6,
      nickname: "张三",
      avator: "http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg",
      message: "how to use Animate.css",
      createTime:"2023/02/03 20:03:20"
    },
    {
      id: 1,
      nickname: "李四",
      avator: "http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg",
      message: "Animate.css is a library of ready-to-use, cross-browser animations for use in your web projects. Great for emphasis, home pages, sliders, and attention-guiding hints.",
      createTime:"2023/02/03 20:03:20"
    },
    {
      id: 1,
      nickname: "李四",
      avator: "http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg",
      message: "npm install animate.css --save",
      createTime:"2023-02-03"
    },
    {
      id: 1,
      nickname: "李四",
      avator: "http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg",
      message: " yarn add animate.css",
      createTime:"2023-02-03"
    }
    , {
      id: 1,
      nickname: "李四",
      avator: "http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg",
      message: "import 'animate.css';",
      createTime:"2023-02-03"
    },
    {
      id: 1,
      nickname: "李四",
      avator: "http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg",
      message: "After installing Animate.css, add the class animate__animated to an element, along with any of the animation names (don't forget the animate__ prefix!):",
      createTime:"2023-02-03"
    },
    {
      id: 6,
      nickname: "张三",
      avator: "http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg",
      message: "thank you",
      createTime:"2023-02-03"
    }
  ])

  



  useEffect(() => {
    messageBox.current!.scrollTop = messageBox.current?.scrollHeight!
  },[])

  // 当前用户ID
  const userId = 6

  useEffect(() => {
    console.log("input",searchInput);
  },[searchInput])



  const handleChatList = () => {
    const newChatList = chatList.filter(item => item.nickname.indexOf(searchInput) != -1)
    setChatList(newChatList)
  }

  const handleSendMessage = () => {
    alert(`发送消息接口${message}`)
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
        console.log("base64",data.target?.result);
    };
    reader.readAsDataURL(file);
  }

  return <div >
    <Header />
    <div className={s.chat}>
      <div className={s.chat_box}>
        <div className={s.chat_box_list}>
          <div className={s.chat_box_list_search}>
            <Input
              type="search"
              placeholder="输入昵称搜索"
              value={searchInput}
              onChange={(v) =>
                typeof v === 'string' ? setInput(v) : setInput(v.toString())
              }
              onclick={handleChatList} />  
          </div>
          <div className={s.chat_box_list_items}>
          {
            chatList.map(item => {
              return <div className={s.chat_box_list_items_item} key={item.id}>
                <img src={item.avator} alt={item.nickname} />
                <div className={s.chat_box_list_items_item_content}>{item.nickname}</div>
                <div className={s.chat_box_list_items_item_time}>{item.chatLastestTime}</div>
              </div>
            })
          }
          </div>
        </div>
        <div className={s.chat_box_message}>
          <div className={s.chat_box_message_show}>
             <div className={s.chat_box_message_show_title}>小溪</div>
            <div className={s.chat_box_message_show_content} ref={messageBox}>
              {
                messageList.map((item,index) => {
                  return <div key={index}>
                    {
                      item.id === userId ?
                        <div className={s.chat_box_message_show_content_me}>
                          <img src={item.avator} alt={item.nickname} />
                          <div className={s.chat_box_message_show_content_me_msg}>
                            <span>{item.nickname}   {item.createTime}</span>
                            <p>{item.message}</p>
                          </div>
                        </div>
                        : <div className={s.chat_box_message_show_content_other}>
                          <img src={item.avator} alt={item.nickname} />
                          <div className={s.chat_box_message_show_content_other_msg}>
                            <span>{item.nickname}   {item.createTime}</span>
                            <p>{item.message}</p>
                          </div>
                        </div>
                    }
                  </div>
                })
              }   
            </div>
          </div>

          <div className={s.chat_box_message_input}>
            <div className={s.chat_box_message_input_top}>
              <img src={smail} alt="选择表情" onClick={()=>setShowEmojiList(!shouEmojiList)}/>
              <img src={image} alt="选择图片" />
              <input type="file" onChange={e => sendImages(e)} />
              {
                shouEmojiList && <EmojiList onClick={e=>setMessage(message+e)
                }/>
              }
            </div>  
            <div className={s.chat_box_message_input_bottom}>
              <textarea
                value={message}
                rows={6}
                placeholder="请输入聊天内容,按Enter发送,按Ctrl+Enter换行"
                onChange={e=>setMessage(e.target.value)}
              ></textarea>
            <div className={s.chat_box_message_input_bottom_btns}>
                <Button onClick={handleSendMessage}>发送</Button>
                <Button onClick={()=>setMessage('')}>清空</Button>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  </div>
}

export default Chat