import { UserInfo } from '../global';
import { myLocal } from "../utils/storage"
const UserLocalKey = 'USER_LOCAL_KEY'
const BuyLocalKey = 'BUY_LOCAL_KEY'

export type storageUser = {
  user: UserInfo,
  token:string
}

const getLocalStorageUserInfo = (): UserInfo => {
  return myLocal.get(UserLocalKey) 
}

const setLocalStorageUserInfo = (value:UserInfo):void => {
   myLocal.set(UserLocalKey,value)
}

const getLocalStorageToken = () => {
  const userInfo: storageUser = myLocal.get(UserLocalKey)
  if (userInfo) return `Bearer ${userInfo.token}`
  return null
}

const getLocalStorageBuyStore = () => {
  return myLocal.get(BuyLocalKey)
}

const setLocalStorageBuyStore = (value:any) => {
  myLocal.set(BuyLocalKey,value)
}

export {
  getLocalStorageUserInfo,
  setLocalStorageUserInfo,
  getLocalStorageToken,
  getLocalStorageBuyStore,
  setLocalStorageBuyStore
}