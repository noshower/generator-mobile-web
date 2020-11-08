import Detail from 'pages/detail';
import Home from 'pages/home';
import ProgramList from 'pages/programList';
import { RouteProps } from 'react-router-dom';

export const routes: RouteProps[] = [
  { component: Home, exact: true, path: '/' },
  { component: ProgramList, path: '/program-list' },
  { component: Detail, path: '/detail' },
];
