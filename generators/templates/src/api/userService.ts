import { get } from 'utils/request';
import { UserDto } from './dtos/userDto';

export const getUser = (): Promise<UserDto> => {
  return get('/service/user');
};
