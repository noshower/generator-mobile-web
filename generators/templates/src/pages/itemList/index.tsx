import React from 'react';
import { Button } from 'antd-mobile';
import { useHistory } from 'react-router-dom';

const List: React.FC = () => {
  const history = useHistory();
  return <Button onClick={history.goBack}>商品列表</Button>;
};
export default List;
