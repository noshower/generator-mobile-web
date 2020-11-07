import React, { useEffect } from 'react';
import { Button, InputItem } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import { getUser } from 'api/userApi';
import css from './index.less';
import UserInfo from './components/userInfo';
import { useModel } from './useModel';

const Home: React.FC = () => {
  const { state, methods } = useModel();
  const history = useHistory();
  const { user } = state;
  const { nick } = user;
  const { changeNick, updateUserInfo } = methods;

  useEffect(() => {
    getUser().then(data => {
      updateUserInfo(data);
    });
  }, [updateUserInfo]);

  const goto = () => {
    history.push('/program-list');
  };

  return (
    <div className={css.container}>
      <UserInfo user={user} />
      <InputItem value={nick} onChange={changeNick}>
        昵称：
      </InputItem>
      <Button onClick={goto} type="primary">
        参加的综艺节目
      </Button>
    </div>
  );
};
export default Home;
