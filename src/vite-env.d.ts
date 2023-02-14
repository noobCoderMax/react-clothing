/// <reference types="vite/client" />

import { type } from "os";

declare module 'gridmanager-react' {
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