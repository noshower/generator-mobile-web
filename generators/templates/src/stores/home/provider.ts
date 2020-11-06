import React from 'react';
import _ from 'lodash-es';
import { Context } from './type';
import { defaultHomeStore } from './reducer';

export const HomeContext = React.createContext<Context>([defaultHomeStore, _.noop]);
export const HomeProvider = HomeContext.Provider;
