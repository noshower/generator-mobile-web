import React from 'react';
import css from './index.less';
import { Props } from './type';

const UserInfo: React.FC<Props> = ({ user }) => {
  const { picture, nick, desc } = user;

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
