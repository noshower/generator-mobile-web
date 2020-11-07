import { UserDto } from 'api/dtos/userDto';

export type State = {
  user: UserDto;
};

export type Methods = {
  changeNick(value: string): void;
  updateUserInfo(value: UserInfo): void;
};
