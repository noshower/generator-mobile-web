import React from 'react';
import { HashRouter } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import Detail from './pages/detail';
import Home from './pages/home';
import ProgramList from './pages/programList';

const Routes: React.FC = () => {
  return (
    <CacheSwitch>
      <CacheRoute exact path="/">
        <Home />
      </CacheRoute>
      <CacheRoute exact path="/program-list">
        <ProgramList />
      </CacheRoute>
      <CacheRoute exact path="/detail">
        <Detail />
      </CacheRoute>
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
