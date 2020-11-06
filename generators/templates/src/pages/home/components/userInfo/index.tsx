import { HomeContext } from 'stores/home/provider';
import React, { useContext } from 'react';
import css from './index.less';

const UserInfo: React.FC = () => {
  const [state] = useContext(HomeContext);
  const { userInfo } = state;
  const { picture, nick, desc } = userInfo;

  return (
    <div className={css.container}>
      <img className={css.pic} alt="头像" src={picture} />
      <div>
        <div className={css.nick}>昵称：{nick}</div>
        <div>简介：{desc}</div>
      </div>
    </div>
  );
};

export default UserInfo;
