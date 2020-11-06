import React from 'react';
import _ from 'lodash-es';
import { Context } from './type';
import { defaultProgramListStore } from './reducer';

export const ProgramListContext = React.createContext<Context>([defaultProgramListStore, _.noop]);

export const ProgramListProvider = ProgramListContext.Provider;
