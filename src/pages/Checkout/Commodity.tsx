import React, { useState } from 'react';
import s from './styles/Commodity.module.less'
import { Button, Modal , Space, Table, Tag } from 'antd';
import Input from '../../components/Input';

const { Column} = Table;

interface DataType {
  id:string,
  key: React.Key;
  firstName: string;
  tags: string[];
  choose: boolean,
  cover: string //封面,
  univalent: number//单价
  sum: number//金额,
  count:number//数量
}

const App: React.FC = () => {
  const [data,setData] = useState<DataType[]>([
    {
      id:"1",
      key: '1',
      firstName: 'John',
      tags: ['nice', 'developer'],
      choose: false,
      univalent: 188,
      sum: 188,
      count:1,
      cover:"http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg"
    },
    {
      id:"2",
      key: '2',
      firstName: 'Jim',
      tags: ['loser'],
      count:1,
      univalent:299, sum:299,
      choose:false,
      cover:"http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg"
  
    },
    { id:"3",
      key: '3',
      firstName: 'Joe',
      tags: ['cool', 'teacher'],
      univalent: 512,
      sum: 512,
      count:1,
      choose:true,
      cover:"http://piccn.ihuaben.com/pic/community/201811/11316158-1541994582483-9N5H_1200-1200.jpeg"
    },
  ])

  const handleDelete = (data: DataType) => {
    setIsModalOpen(true);
    console.log("商品信息",data);
  }

  const handleChecked = (choose:boolean) => {
    console.log("choose",choose);
  }

  const handleCount = (count:number) => {
    console.log("count",count);
  }


  const handleTag = (tagName:string) => {
    // 跳转搜索页，按标签搜索
    console.log("标签",tagName);
    
  }

  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return <>
   <Table dataSource={data}>
    <Column
      title={() => {
        return <div className={s.radio}>
          <input className={s.radio_btn} type="radio" />
          <div className={s.radio_text}>全选</div>
        </div>
      }}
      dataIndex="choose"
      key="choose"
      width="120px"
      render={(choose:boolean) => (
        <>
          <input className={s.checkbox} type="checkbox" checked={choose} onChange={()=>handleChecked(choose)}/>
        </>
      )}
    />
      <Column
        title="封面"
        dataIndex="cover"
        key="cover"
        render={(cover:string,firstName: string) => {
          return <img className={s.cover} src={cover} alt={firstName}></img>
        }} />
    <Column title="Address" dataIndex="address" key="address" />
    <Column title="单价" dataIndex="univalent" key="univalent" render={(univalent:number)=><span className={s.univalent}>￥{univalent}</span>}/>
      <Column title="数量" dataIndex="count" key="count" render={(count: number) => {
        return <div style={{width:'120px'}}>
          <Input
          type='number'
          value={count.toString()}
          onChange={(e) => {
            typeof e === 'string' ?
            handleCount(Number(e)):
            handleCount(e)
          }}
        />
        </div>
      }} />
    <Column title="金额" dataIndex="sum" key="sum" render={(sum: number) => <span className={s.sum}>￥{sum}</span>} />
    <Column
      title="标签"
      dataIndex="tags"
      key="tags"
      render={(tags: string[]) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag} className={s.tag} onClick={()=>handleTag(tag)}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title={() => {
          return <div className={s.action}>操作</div>
      }}
      key="action"
      width="180px"
      render={(id:string) => (
        <Space size="middle" className={s.center}>
          <Button type='primary'>收藏</Button>
          <Button type='default' onClick={()=>handleDelete(id)}>删除</Button>
        </Space>
      )}
    />
    </Table>
    
    <Modal
      title="提示"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="确定"
      cancelText="取消"
    >
        <p>确定删除选择的商品吗？</p>
    </Modal>
 </>
};

export default App;