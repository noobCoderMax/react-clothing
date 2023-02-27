import { UserInfo } from 'golbal';
import { myLocal } from "../utils/storage"

// 临时信息
const tempUser = {
  nickname: "kuuga",
  email: "1914275425@qq.com",
  avator: "",
  age: 23,
  gender: 1,
  phone: "17593321017",
  token:""
}

const UserLocalKey = 'USER_LOCAL_KEY'

const getLocalStorageUserInfo = ():UserInfo => {
  return myLocal.get(UserLocalKey) 
}

const setLocalStorageUserInfo = (value:UserInfo):void => {
   myLocal.set(UserLocalKey,value)
}

export {
  getLocalStorageUserInfo,
  setLocalStorageUserInfo
}