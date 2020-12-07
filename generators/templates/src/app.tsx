import { lazy, Suspense, FC } from 'react';
import { HashRouter } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';

import css from './app.less';

// 使用webpackChunkName:"文件名" 注释 ，将同个功能的页面打包到一起

const routes = [
  { component: lazy(() => import('pages/home')), exact: true, path: '/' },
  { component: lazy(() => import(/* webpackChunkName: "program" */ 'pages/programList')), path: '/program-list' },
  { component: lazy(() => import(/* webpackChunkName: "program" */ 'pages/detail')), path: '/detail' },
];

const Routes: FC = () => (
  <CacheSwitch>
    {routes.map(({ component: C, ...config }) => (
      <CacheRoute {...config} key={config.path} className={css.page}>
        <Suspense fallback={null}>
          <C />
        </Suspense>
      </CacheRoute>
    ))}
  </CacheSwitch>
);

const App: FC = () => (
  <HashRouter>
    <Routes />
  </HashRouter>
);

export default App;
