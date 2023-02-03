import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import s from './index.module.less'
import { Modal } from 'antd';
import { Select, Space } from 'antd';
import classNames from "classnames";

export enum Gender {
  male = 0,
  fomale = 1,
  unknown = -1,
}

export type User = {
  nickname: string,
  avator: string,
  gender: number,
  email: string,
  sign:string,
  age?: number,
  tips: string[]
}

const spanBgc = ['#02b5da','#5fd4f2','#f3a034','#fbc7f5']

const Mine: React.FC = () => {
  const [title, setTitle] = useState<string>('')
  const [open, setOpen] = useState(false);
  const [modalText,setModalText] = useState('')
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [user, setUser] = useState<User>({
    avator: "http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg",
    nickname: "宋祖儿",
    gender: 1,
    email: "1914275425@qq.com",
    sign: "你每天会忘记上千件事，为何不把这件事也忘了?",
    tips:['新用户','VIP','服装达人']
  })


  useEffect(() => {
    console.log("send request");
    console.log("title",title);
  }, [user,title])

  const news = [
    {
      id: 1,
      content: "你每天会忘记上千件事，为何不把这件事也忘了?",
      createTime:'2023-01-31'
    },
    {
      id: 2,
      content: "你每天会忘记上千件事，为何不把这件事也忘了?",
      createTime:'2023-01-31'
    },
    {
      id: 3,
      content: "你每天会忘记上千件事，为何不把这件事也忘了?",
      createTime:'2023-01-31'
    },
    {
      id: 4,
      content: "你每天会忘记上千件事，为何不把这件事也忘了?",
      createTime:'2023-01-31'
    }, {
      id: 5,
      content: "你每天会忘记上千件事，为何不把这件事也忘了?",
      createTime:'2023-01-31'
    }
  ]

  const showModal = (btnType:string) => {
    setTitle(pre=>btnType)
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSelectChange = (value: number) => {
    setUser({...user,gender:value})
    console.log(`user`,user);
  };

  const updateAvator = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  return <div>
    <Header/>
    <div className={s.mine}>
      <div className={s.mine_info}>
        <img src={user.avator} alt="avator" />
        <input type="file" className={s.mine_info_file} onChange={(e)=>updateAvator(e)}/>
        <div  className={classNames([s.mine_info_name,"animate__animated","animate__bounce"])}>{user.nickname}</div>
        <div className={s.mine_info_tips}>
          {
            user.tips.map((item,index) => {
              return <span key={item}  style={{backgroundColor:spanBgc[index]}}>{item}</span>
            })
          }
        </div>
      </div>

      <div className={s.mine_detail}>
        {/* news */}
        <div className={s.mine_detail_left}>
          {
            news.map(item => {
              return <div key={item.id} className={s.mine_detail_left_item}>
                {item.content}
              </div>
            })
        }
        </div>
        {/* info */}
        <div className={s.mine_detail_right}>
          <div className={s.mine_detail_right_item}>
            <span>
              性别:
            </span>
            <div className={s.mine_detail_right_item_content}>{user.gender === -1? "保密":user.gender === 0?"男":"女"}</div>
            <div className={s.mine_detail_right_item_btn}>
              <button  type="button" onClick={()=>showModal('性别')}>
              修改
              </button>
            </div>
          </div>
          <div className={s.mine_detail_right_item}>
            <span>
              邮箱:
            </span>
            <div className={s.mine_detail_right_item_content}>{user.email}</div>
            <div className={s.mine_detail_right_item_btn}>
              <button type="button" onClick={()=>showModal('邮箱')}>
              修改
              </button>
            </div>
          </div>
          <div className={s.mine_detail_right_item}>
            <span>
              签名:
            </span>
            <div className={s.mine_detail_right_item_content}>{user.sign}</div>
            <div className={s.mine_detail_right_item_btn}>
              <button type="button" onClick={()=>showModal('签名')}>
                修改
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Modal
          title={`修改您的${title}`}
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          centered={true}
          okText="确认"
          cancelText="取消"
        >
          {
            title !== '性别'?
            <input className={s.modleInput} type="text" placeholder={`请输入${title}`} />
            :
            <Space wrap>
              <Select
                  defaultValue={user.gender}
                  style={{ width: 260,marginTop:12 }}
                  onChange={handleSelectChange}
                  options={[
                    { value: Gender.male, label: '男性' },
                    { value: Gender.fomale, label: '女性' },
                    { value: Gender.unknown, label: '保密' },
                  ]}
              />
            </Space>
          }
        </Modal>
      </div>
    </div>
  </div>
}

export default Mine