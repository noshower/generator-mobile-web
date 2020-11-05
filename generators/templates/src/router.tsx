import React, { ComponentType, LazyExoticComponent } from 'react';

/* eslint @typescript-eslint/no-explicit-any: 0 */
type Routes = { path: string; component: LazyExoticComponent<ComponentType<any>> }[];

// 首页
const home = (): Routes => {
  const path = '/';
  return [
    {
      path,
      component: React.lazy(() => import(/* webpackChunkName: "home" */ 'pages/home')),
    },
  ];
};

const itemList = (): Routes => {
  const path = '/itemList';
  return [
    {
      path,
      component: React.lazy(() => import(/* webpackChunkName: "itemList" */ 'pages/itemList')),
    },
  ];
};

const routeConfig: Routes = [...home(), ...itemList()];

export default routeConfig;
