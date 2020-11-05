import React from 'react';
import { Button } from 'antd-mobile';
import { useHistory, withRouter } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();

  const onClick = () => {
    history.push('/itemList');
  };

  return <Button onClick={onClick}>首页</Button>;
};
export default withRouter(Home);
