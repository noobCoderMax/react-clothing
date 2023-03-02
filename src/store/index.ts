import { create } from 'zustand'
import { UserInfo } from '../global';
import {
  getLocalStorageUserInfo,
  setLocalStorageUserInfo,
  getLocalStorageToken,
  getLocalStorageBuyStore,
  setLocalStorageBuyStore
} from './storageFn';
interface useLoading {
  loading: boolean,
  setLoading:(value:boolean)=>void
}
interface useUserStore {
  userInfo: UserInfo,
  setUserInfo: (value: UserInfo) => void,
  getToken:()=>void
}

interface useBuyStore {
  buyStore: () => void,
  setBuyStore:(value:any)=>void
}

const useLoadingStore = create<useLoading>((set) => ({
  loading: false,
  setLoading:(value:boolean)=>set(()=>({loading:value}))
}))

const useUserStore = create<useUserStore>((set) => ({
  userInfo: getLocalStorageUserInfo(),
  setUserInfo: (value: UserInfo) => setLocalStorageUserInfo(value),
  getToken:()=>getLocalStorageToken()   
}))

const useBuyStore = create<useBuyStore>(() => ({
  buyStore: getLocalStorageBuyStore,
  setBuyStore: (value: any) => setLocalStorageBuyStore(value),
}))

export {
  useLoadingStore,
  useUserStore,
  useBuyStore
}