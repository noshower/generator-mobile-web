import { UserDto, ProgramDto } from './dtos/userDto';

export const getUser = (): Promise<UserDto> => {
  return Promise.resolve({
    picture: 'https://noshower.oss-cn-shanghai.aliyuncs.com/imgs/wangou.jpg',
    nick: '王鸥',
    desc: '王鸥 ( Angel wang )，1982年10月28日出生于广西壮族自治区南宁市，中国内地女演员。',
  });
};

export const getProgramList = (): Promise<ProgramDto[]> => {
  return Promise.resolve([
    { id: 1, name: 'CCTV-3《TOP荣耀时刻》' },
    { id: 2, name: '湖南卫视-巧手神探' },
  ]);
};
