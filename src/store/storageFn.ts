import { UserInfo } from '../global';
import { myLocal } from "../utils/storage"
const UserLocalKey = 'USER_LOCAL_KEY'
const BuyLocalKey = 'BUY_LOCAL_KEY'
const MoodLocalKey = 'MOOD_LOCAL_KEY'

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

const getLocalMood = () => {
  return myLocal.get(MoodLocalKey)
}

const setLocalMood = (value: string) => {
  const moodTable:Record<string,string>= {
    恐惧: "#000000",
    悲伤: "#c0c0c0",
    自卑: "#5f9ea0",
    快乐: "#f66667",
    抑郁: "#00a8e0",
    忧郁: "#00a8e0",
    焦虑: "#ff00ff",
    易怒: "#a9a9a9",
  }
  myLocal.set(MoodLocalKey,moodTable[value])
}

export {
  getLocalStorageUserInfo,
  setLocalStorageUserInfo,
  getLocalStorageToken,
  getLocalStorageBuyStore,
  setLocalStorageBuyStore,
  getLocalMood,
  setLocalMood
}