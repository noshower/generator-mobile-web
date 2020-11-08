import React from 'react';
import { HashRouter } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import { routes } from './routeConfig';
import css from './app.less';

const Routes: React.FC = () => {
  return (
    <CacheSwitch>
      {routes.map(config => {
        return <CacheRoute {...config} className={css.page} />;
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
