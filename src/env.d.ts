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

