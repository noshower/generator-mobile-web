import React from 'react';
import { HashRouter, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useImmerReducer } from 'use-immer';
import { defaultHomeStore, homeReducer } from 'stores/home/reducer';
import { HomeProvider } from 'stores/home/provider';
import { ProgramListProvider } from 'stores/programList/provider';
import css from './app.less';
import Home from './pages/home';
import ItemList from './pages/programList';
import { defaultProgramListStore, programListReducer } from './stores/programList/reducer';

const ANIMATION_MAP = {
  PUSH: 'forward',
  POP: 'back',
  REPLACE: '',
};

const Routes: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  const homeState = useImmerReducer(homeReducer, defaultHomeStore);
  const programListState = useImmerReducer(programListReducer, defaultProgramListStore);

  return (
    <TransitionGroup childFactory={child => React.cloneElement(child, { classNames: ANIMATION_MAP[history.action] })}>
      <CSSTransition key={location.pathname} timeout={500}>
        <div className={css.page}>
          <Switch location={location}>
            <Route exact path="/">
              <HomeProvider value={homeState}>
                <Home />
              </HomeProvider>
            </Route>
            <Route exact path="/itemList">
              <ProgramListProvider value={programListState}>
                <ItemList />
              </ProgramListProvider>
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
