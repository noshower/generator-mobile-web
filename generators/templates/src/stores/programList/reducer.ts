import { Reducer } from 'use-immer';
import _ from 'lodash-es';
import { ProgramListStore, Action } from './type';

export const defaultProgramListStore: ProgramListStore = {
  list: [
    { id: 1, name: 'CCTV-3《TOP荣耀时刻》' },
    { id: 2, name: '湖南卫视-巧手神探' },
  ],
  inputValue: '',
};

export const programListReducer: Reducer<ProgramListStore, Action> = (draft, action) => {
  switch (action.type) {
    case 'initial':
      return defaultProgramListStore;
    case 'add':
      draft.list.push(action.payload);
      draft.inputValue = '';
      break;
    case 'delete':
      draft.list = _.reject(draft.list, { id: action.payload });
      break;
    case 'changeInputValue':
      draft.inputValue = action.payload;
      break;
    default:
      throw new Error('没有这个action');
  }
};
