import React from 'react';
import _ from 'lodash-es';
import css from './index.less';
import { Props } from './type';

// 使用symbol方式引用Icon https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code
// 更新图标时，需要替换html下的js链接
// 链接长这样子：//at.alicdn.com/t/font_1620455_idb38j1ax3n.js
const Icon: React.FC<Props> = (props) => {
  const { type, className = '', onClick = _.noop } = props;
  return (
    <svg className={`${css.icon} ${className}`} aria-hidden="true" onClick={onClick}>
      <use xlinkHref={`#icon-${type}`} />
    </svg>
  );
};

export default Icon;
