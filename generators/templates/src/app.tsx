import React, { Suspense } from 'react';
import { HashRouter, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import routes from './router';
import css from './app.less';

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
        <Switch location={location}>
          {routes.map(({ component: C, path }) => {
            return (
              <Route exact path={path} key={path}>
                <Suspense fallback={null}>
                  <div className={css.page}>
                    <C />
                  </div>
                </Suspense>
              </Route>
            );
          })}
        </Switch>
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
