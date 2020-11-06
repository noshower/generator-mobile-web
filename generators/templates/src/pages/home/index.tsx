import React, { useContext } from 'react';
import { Button, InputItem } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import { HomeContext } from 'stores/home/provider';
import css from './index.less';
import UserInfo from './components/userInfo';

const Home: React.FC = () => {
  const history = useHistory();

  const [state, dispatch] = useContext(HomeContext);
  const { userInfo } = state;
  const { nick } = userInfo;

  const onClick = () => {
    history.push('/itemList');
  };

  const onChange = (value: string) => {
    dispatch({ type: 'changeNick', payload: value });
  };

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
