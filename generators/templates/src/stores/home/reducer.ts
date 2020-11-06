import { Reducer } from 'use-immer';
import { HomeStore, Action } from './type';

export const defaultHomeStore: HomeStore = {
  userInfo: {
    picture: 'https://noshower.oss-cn-shanghai.aliyuncs.com/imgs/wangou.jpg',
    nick: '王鸥',
    desc: '王鸥 ( Angel wang )，1982年10月28日出生于广西壮族自治区南宁市，中国内地女演员。',
  },
};

export const homeReducer: Reducer<HomeStore, Action> = (draft, action) => {
  switch (action.type) {
    case 'initial':
      return defaultHomeStore;
    case 'changeNick':
      draft.userInfo.nick = action.payload;
      break;
    default:
      throw new Error('未知的action');
  }
};
