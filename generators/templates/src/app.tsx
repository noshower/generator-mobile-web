import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';

import css from './app.less';

// 使用webpackChunkName:"文件名" 注释 ，将同个功能的页面打包到一起

const routes = [
  { component: React.lazy(() => import('pages/home')), exact: true, path: '/' },
  { component: React.lazy(() => import(/* webpackChunkName: "program" */ 'pages/programList')), path: '/program-list' },
  { component: React.lazy(() => import(/* webpackChunkName: "program" */ 'pages/detail')), path: '/detail' },
];

const Routes: React.FC = () => {
  return (
    <CacheSwitch>
      {routes.map(({ component: C, ...config }) => {
        return (
          <CacheRoute {...config} key={config.path} className={css.page}>
            <Suspense fallback={null}>
              <C />
            </Suspense>
          </CacheRoute>
        );
      })}
    </CacheSwitch>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
};

export default App;
