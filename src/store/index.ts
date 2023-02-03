import { proxy } from "valtio";
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

export const userStore = proxy<UserStore>({
  nickname: "",
  email: "",
  avator: "",
  gender: Gender.unknown,
  age: 20,
  phone: "",
});

export const updateUserName = (name: string) => {
  userStore.nickname = name;
};
