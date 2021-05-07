import React, { useEffect } from 'react';
import { Button, InputItem } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import css from './index.less';
import UserInfo from './components/userInfo';
import { useModel } from './useModel';

const Home: React.FC = () => {
  const history = useHistory();
  const { state, methods } = useModel();
  const { user } = state;
  const { nick } = user;
  const { changeNick, fetchData } = methods;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
