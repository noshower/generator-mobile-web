import React from 'react';
import { HashRouter, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import css from './app.less';
import Home from './pages/home';
import ProgramList from './pages/programList';

const ANIMATION_MAP = {
  PUSH: 'forward',
  POP: 'back',
  REPLACE: '',
};

const Routes: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <TransitionGroup childFactory={child => React.cloneElement(child, { classNames: ANIMATION_MAP[history.action] })}>
      <CSSTransition key={location.pathname} timeout={500}>
        <div className={css.page}>
          <Switch location={location}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/program-list">
              <ProgramList />
            </Route>
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
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
