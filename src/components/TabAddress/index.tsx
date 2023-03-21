import { FC, useEffect, useState } from "react"
import { addressForShop } from "../../global"
import { useUserStore } from "../../store"
import s from './index.module.less'
import {
  Modal, Space, Table, Button,
  Cascader,
  Form,
  Input,
  message,
} from 'antd';
import { AddressData } from "../../utils/formatAddress";
import useAxio from "../../Hooks/useAxios";
const { Column } = Table;

const addressListFilter = (addressList: addressForShop[]) => {
  return addressList?.map(item => {
    return {
      province: item.province,
      city: item.city,
      district: item.district,
      detail: item.detail,
      userName: item.userName,
      phone: item.phone,
      id: item.id
    }
  })
}

const TabAddress: FC = () => {
  const { post, get, patch, delete: deleteAddress } = useAxio({ showLoading: false, handleError: false })
  const [messageApi, contextHolder] = message.useMessage()
  // 获取用户收获地址
  const { addressList, id: userId } = useUserStore(state => state.userInfo)
  const [addList, setAddList] = useState<addressForShop[]>(addressListFilter(addressList!))
  // 修改地址表单可视
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 新增地址表单可视
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  // 修改地址
  const [address, setAddress] = useState<addressForShop>({
    id: "",
    province: "",
    city: "",
    district: "",
    detail: "",
    userName: "",
    phone: ""
  })
  // 新增地址
  const [newAddress, setNewAddress] = useState<Partial<addressForShop>>({
    province: "",
    city: "",
    district: "",
    detail: "",
    userName: "",
    phone: "",
    userId: userId
  })

  useEffect(() => {
    getLatestAddressList()
  }, [])

  // 修改地址并重新请求
  const handleOk = async () => {
    const resource: any = await patch("/address/update", address)
    if (resource.success) {
      messageApi.success("修改地址成功！")
    } else {
      messageApi.error("修改地址失败！")
    }
    getLatestAddressList()
  };

  //重新请求后台地址数据
  const getLatestAddressList = async () => {
    const newAddressList: any = await get(`/address/${userId}`)
    setAddList(newAddressList.data)
    setIsModalOpen(false);
  }

  // 打开编辑表单
  const handleEditAddress = (recard: addressForShop) => {
    setAddress(recard)
    showModal()
  }

  // 删除地址
  const handleDeleteAddress = async (id: string) => {
    const deleteResult: any = await deleteAddress(`/address/${id}`, { timeout: 20000 })
    if (deleteResult.success) {
      messageApi.success("删除地址成功！")
    } else {
      messageApi.error("删除地址失败！")
    }
    getLatestAddressList()
  }

  // 取消编辑表单
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // 编辑表单
  const showModal = () => {
    setIsModalOpen(true);
  };

  // 新增表单
  const showNewModal = () => {
    setIsNewModalOpen(true)
  };

  // 取消新增表单
  const handleCancelNew = () => {
    setIsNewModalOpen(false)
  };

  const handleOkNew = async () => {
    const createAddressResult: any = await post("/address/create", newAddress, { timeout: 20000 })
    if (createAddressResult.success) {
      messageApi.success("新增地址成功！")
    } else {
      messageApi.error("新增地址失败！")
    }
    getLatestAddressList()
    setIsNewModalOpen(false)
  }

  const handleCancleNew = () => {
    setIsNewModalOpen(false)
  }


  return <div className={s.tab}>
    {contextHolder}
    {
      addList.length == 0 ?
        <div className={s.empty}>暂无收货地址</div>
        :
        <div >
          <Table
            dataSource={addList}
            pagination={false}
          >
            <Column title="省份" dataIndex="province" key="province" />
            <Column title="城市" dataIndex="city" key="city" />
            <Column title="区县" dataIndex="district" key="district" />
            <Column title="详细地址" dataIndex="detail" key="detail" />
            <Column title="姓名" dataIndex="userName" key="userName" />
            <Column title="电话" dataIndex="phone" key="phone" />
            <Column
              title={() => {
                return <div className={s.action}>操作</div>
              }}
              width="200px"
              key="actions"
              render={(_: any, record: addressForShop) => (
                <Space size="middle" className={s.actionItem}>
                  <Button
                    type="primary"
                    onClick={() => handleEditAddress(record)}
                  >
                    编辑
                  </Button>
                  <Button
                    type="default"
                    style={{
                      backgroundColor: "red",
                      color: "#fff"
                    }}
                    onClick={() => handleDeleteAddress(record.id)}
                  >
                    删除
                  </Button>
                </Space>
              )}
            />
          </Table>

        </div>
    }
    <div className={s.btn}>
      <Button type="primary" onClick={() => showNewModal()}>新建</Button>
    </div>
    {/* 编辑表单 */}
    <Modal
      title="编辑收获地址"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="确认修改"
      cancelText="取消修改"
    >
      <Form
        layout="horizontal"
        size="middle"
        style={{ maxWidth: 600, marginTop: "40px" }}
      >
        <Form.Item label="收货人姓名">
          <Input value={address.userName} onChange={e => setAddress(pre => ({ ...pre, userName: e.target.value }))} />
        </Form.Item>
        <Form.Item label="收货人电话">
          <Input value={address.phone} onChange={e => setAddress(pre => ({ ...pre, phone: e.target.value }))} />
        </Form.Item>
        <Form.Item label="收货地址">
          <Cascader
            options={AddressData}
            value={[address.province, address.city, address.district]}
            onChange={value => {
              setAddress(pre => ({
                ...pre,
                province: value[0] as string,
                city: value[1] as string,
                district: value[2] as string
              }))
            }}
          />
        </Form.Item>
        <Form.Item label="详细地址">
          <Input value={address.detail} onChange={e => setAddress(pre => ({ ...pre, detail: e.target.value }))} />
        </Form.Item>
      </Form>
    </Modal>

    {/* 新增表单 */}
    <Modal
      title="新增收获地址"
      open={isNewModalOpen}
      onOk={handleOkNew}
      onCancel={handleCancleNew}
      okText="确认新增"
      cancelText="取消新增"
    >
      <Form
        layout="horizontal"
        size="middle"
        style={{ maxWidth: 600, marginTop: "40px" }}
      >
        <Form.Item label="收货人姓名">
          <Input value={newAddress.userName} onChange={e => setNewAddress(pre => ({ ...pre, userName: e.target.value }))} />
        </Form.Item>
        <Form.Item label="收货人电话">
          <Input value={newAddress.phone} onChange={e => setNewAddress(pre => ({ ...pre, phone: e.target.value }))} />
        </Form.Item>
        <Form.Item label="收货地址">
          <Cascader
            options={AddressData}
            onChange={value => {
              setNewAddress(pre => ({
                ...pre,
                province: value[0] as string,
                city: value[1] as string,
                district: value[2] as string
              }))
            }}
          />
        </Form.Item>
        <Form.Item label="详细地址">
          <Input value={newAddress.detail} onChange={e => setNewAddress(pre => ({ ...pre, detail: e.target.value }))} />
        </Form.Item>
      </Form>
    </Modal>
  </div>
}

export default TabAddress