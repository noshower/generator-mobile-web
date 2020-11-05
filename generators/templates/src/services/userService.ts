import { UserDto } from 'dtos/userDto';
import { get } from '../utils/request';

export const getUser = () => {
  return get<UserDto>('/service/user');
};
