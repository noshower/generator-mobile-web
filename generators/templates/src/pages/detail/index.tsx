import { Button } from 'antd-mobile';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import css from './index.less';

const Detail: FC = () => {
  const history = useHistory();

  return (
    <div className={css.container}>
      <div className={css.detail}>
        王鸥三岁的时候父母离婚，因为都没有精力照顾孩子，于是她被寄养在了邻居阿姨、邻居叔叔、邻居奶奶家里。因为爱玩，父母也没攒下什么积蓄，除了每个月要支付寄养家庭的费用，没有零用钱
        [3] 。她的妈妈是个裁缝，所以小时候王鸥就经常看妈妈摆弄各种裁剪布料，耳濡目染的她从小就对设计心怀向往。
      </div>
      <Button type="primary" onClick={history.goBack}>
        返回上一页
      </Button>
    </div>
  );
};

export default Detail;
