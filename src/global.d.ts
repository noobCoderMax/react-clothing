import { AxiosResponse } from 'axios';

declare module 'golbal' {
  export enum Gender {
    male = 0,
    fomale = 1,
    unknown = -1,
  }

  export type UserStore = {
    nickname: string;
    email: string;
    avator: string;
    gender: Gender.fomale | Gender.male | Gender.unknown;
    age: number;
    phone: string;
  };

  // 商品类型
  export type GoodType = {
    id: string,
    imgSrc: string,
    sales: number,
    images: string[],
    price: number,
    tips: string[],
    info:string
  }
  
  // 条件筛选类型
  export type CategoryType = {
    label: string,
    values:string[]
  }




}
export interface UserInfo {
  nickname: string;
  email: string;
  avator: string;
  gender: Gender.fomale | Gender.male | Gender.unknown;
  age: number;
  phone: string;
  token?:string
}

export interface UserInfo {
  nickname: string;
  email: string;
  avator: string;
  gender: Gender.fomale | Gender.male | Gender.unknown;
  age: number;
  phone: string;
  token?:string
}

export type axiosResult = {
  data: any,
  success: boolean,
  message:string
}

//登录表单
export type LoginForm = {
  email: string,
  password: string,
  svgCode:string
}

// 注册表单
export type registerForm = {
  avator?: string,
  userName: string,
  email: string,
  password: string,
  emailCode: string,
  tips?: string[],
  address?: Record<string, string>
}
export interface ajaxRespones extends AxiosResponse {
  data: any,
  message: string,
  success: boolean
}

export type BuyItemType = {
  id:string|number,
  size: string,
  count: number,
  address: string,
}

export type GoodType = {
  id: string,
  imgSrc: string,
  sales: number,
  images: string[],
  price: number,
  tips: string[],
  info:string
} 

// 评论类型
export type Comment = {
  id: number,
  userName: string,
  avator: string,
  content: string,
  createTime: string
}