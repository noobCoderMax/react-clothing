import React, { useEffect, useState } from 'react';
import { Cascader, Input } from 'antd';
import s from './styles/AddressInput.module.less'
import { formatAddress, AddressData } from '../../utils/formatAddress'

type Props = {
  getValue: (value: string) => void
}

const AddressInput: React.FC<Props> = (props) => {
  const { getValue } = props
  const [value, setValue] = useState<string>('')
  const [detailAddress, setDetailAddress] = useState<string>('')

  const onChange = (value: any[]) => {
    setValue(value.join(''))
  };

  useEffect(() => {
    getValue(value + detailAddress)
  }, [value, detailAddress])

  return <div className={s.address}>
    <Cascader
      style={{ width: "200px" }}
      options={AddressData}
      placeholder="请选择地址"
      onChange={onChange}
    />
    <div className={s.address_text}>详细地址:</div>
    <Input style={{ width: '180px' }} value={detailAddress} onChange={(e) => setDetailAddress(e.target.value)} />
  </div>
}
export default AddressInput;