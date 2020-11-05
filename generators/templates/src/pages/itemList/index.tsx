import React from 'react';
import { Button } from 'antd-mobile';
import modal from 'components/modal';

const List: React.FC = () => {
  return (
    <Button
      onClick={async () => {
        await modal({ title: 'Hello World' }, <div>hello</div>);
      }}>
      商品列表
    </Button>
  );
};
export default List;
