import { create } from 'zustand'
import { UserInfo } from '../global';
import {
  getLocalStorageUserInfo,
  setLocalStorageUserInfo,
  getLocalStorageToken,
  getLocalStorageBuyStore,
  setLocalStorageBuyStore,
  getLocalMood,
  setLocalMood,
  clearLocalStorageUserInfo
} from './storageFn';
interface useLoading {
  loading: boolean,
  setLoading:(value:boolean)=>void
}
interface useUserStore {
  userInfo: UserInfo,
  setUserInfo: (value: UserInfo) => void,
  getToken: () => void,
  clearUserInfo:()=>void
}

interface useBuyStore {
  buyStore: () => void,
  setBuyStore:(value:any)=>void
}

interface useMoodStore {
  moodLocal: ()=>void,
  setMoodLocal:(value:string)=>void
}

const useLoadingStore = create<useLoading>((set) => ({
  loading: false,
  setLoading:(value:boolean)=>set(()=>({loading:value}))
}))

const useUserStore = create<useUserStore>(() => ({
  userInfo: getLocalStorageUserInfo(),
  setUserInfo: (value: UserInfo) => setLocalStorageUserInfo(value),
  getToken: () => getLocalStorageToken(),
  clearUserInfo:()=>clearLocalStorageUserInfo(),
}))

const useBuyStore = create<useBuyStore>(() => ({
  buyStore: getLocalStorageBuyStore,
  setBuyStore: (value: any) => setLocalStorageBuyStore(value),
}))

const useMoodStyleStore = create<useMoodStore>(() => ({
  moodLocal: getLocalMood,
  setMoodLocal:(value:string)=>setLocalMood(value)
}))

export {
  useLoadingStore,
  useUserStore,
  useBuyStore,
  useMoodStyleStore
}