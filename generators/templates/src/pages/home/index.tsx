import React from 'react';
import { Button, InputItem } from 'antd-mobile';
import css from './index.less';
import UserInfo from './components/userInfo';
import useHome from './useHome';

const Home: React.FC = () => {
  const { state, methods } = useHome();
  const { userInfo } = state;
  const { nick } = userInfo;
  const { onChange, onClick } = methods;

  return (
    <div className={css.container}>
      <UserInfo />
      <InputItem value={nick} onChange={onChange}>
        昵称：
      </InputItem>
      <Button onClick={onClick} type="primary">
        参加的综艺节目
      </Button>
    </div>
  );
};
export default Home;
