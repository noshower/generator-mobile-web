import wangou from 'assets/avatar/wangou.jpg';
import { UserDto } from './dtos/userDto';
import { ProgramDto } from './dtos/programDto';

export const getUser = (): Promise<UserDto> => {
  return Promise.resolve({
    picture: wangou,
    nick: '王鸥',
    desc: '王鸥 ( Angel wang )，1982年10月28日出生于广西壮族自治区南宁市，中国内地女演员。',
  });
};

export const getProgramList = (): Promise<ProgramDto[]> => {
  return Promise.resolve([
    { id: 1, name: 'CCTV-3《TOP荣耀时刻》' },
    { id: 2, name: '湖南卫视-巧手神探' },
    { id: 3, name: '湖南卫视我家那闺女2' },
    { id: 4, name: 'CCTV-3我要上春晚' },
    { id: 5, name: 'CCTV-3直通春晚' },
    { id: 6, name: '北京卫视跨界歌王第四季' },
    { id: 7, name: '芒果TV明星大侦探第五季' },
    { id: 8, name: '野生厨房' },
    { id: 9, name: '湖南卫视-天天向上' },
    { id: 10, name: '芒果TV明星大侦探第三季' },
    { id: 11, name: '江苏卫视-我们相爱吧之爱有天意' },
    { id: 12, name: '浙江卫视-王牌对王牌第二季' },
    { id: 13, name: '腾讯视频-触不到的TA' },
    { id: 14, name: '浙江卫视-开心剧乐部' },
    { id: 15, name: '湖南卫视-全员加速中' },
    { id: 16, name: '芒果TV明星大侦探第一季' },
    { id: 17, name: '芒果TV明星大侦探第二季' },
    { id: 18, name: 'CCTV-3《TOP荣耀时刻》' },
    { id: 19, name: '湖南卫视-巧手神探' },
    { id: 20, name: '湖南卫视我家那闺女2' },
    { id: 21, name: 'CCTV-3我要上春晚' },
    { id: 22, name: 'CCTV-3直通春晚' },
    { id: 23, name: '北京卫视跨界歌王第四季' },
    { id: 24, name: '芒果TV明星大侦探第五季' },
    { id: 25, name: '野生厨房' },
    { id: 26, name: '湖南卫视-天天向上' },
    { id: 27, name: '芒果TV明星大侦探第三季' },
    { id: 28, name: '江苏卫视-我们相爱吧之爱有天意' },
    { id: 29, name: '浙江卫视-王牌对王牌第二季' },
    { id: 30, name: '腾讯视频-触不到的TA' },
    { id: 31, name: '浙江卫视-开心剧乐部' },
    { id: 32, name: '湖南卫视-全员加速中' },
    { id: 33, name: '芒果TV明星大侦探第一季' },
    { id: 34, name: '芒果TV明星大侦探第二季' },
  ]);
};
