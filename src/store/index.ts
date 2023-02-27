import { UserInfo } from 'golbal';
import { UserStore } from 'golbal'
import { create } from 'zustand'
import { getLocalStorageUserInfo, setLocalStorageUserInfo } from './storageFn';
interface useLoading {
  show: () => void,
  hide:()=>void
  // isShow: (value: boolean) => void,
}
interface useUserStore {
  userInfo: UserInfo,
  setUserInfo:(value:UserInfo)=>void
}

const useLoadingStore = create<useLoading>((set) => ({
  show() {},
  hide() {},
  // isShow:(value)=>set(()=>({show:value}))
}))

const useUserStore = create<useUserStore>((set) => ({
  userInfo: getLocalStorageUserInfo(),
  setUserInfo: (value: UserInfo) => setLocalStorageUserInfo(value)
}))

export {
  useLoadingStore,
  useUserStore
}