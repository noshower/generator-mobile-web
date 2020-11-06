export type UserInfo = {
  picture: string;
  nick: string;
  desc: string;
};

export type HomeStore = {
  userInfo: UserInfo;
};

export type Action =
  | {
      type: 'initial';
      payload: UserInfo;
    }
  | {
      type: 'changeNick';
      payload: string;
    };

export type Context = [HomeModel, React.Dispatch<Action>];
