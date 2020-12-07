import { ProgramDto } from 'api/dtos/programDto';
import { useCallback, useState } from 'react';
import { UseModel } from 'types/useModel';
import { useImmer } from 'use-immer';
import _ from 'lodash-es';
import { Toast } from 'antd-mobile';
import { getProgramList } from 'api/demoApi';
import { State, Methods } from './type';

export const useModel: UseModel<State, Methods> = () => {
  const [programList, setProgramList] = useImmer<ProgramDto[]>([]);
  const [inputValue, setInputValue] = useState('');

  const changeInputValue = (value: string) => {
    setInputValue(value);
  };

  const fetchData = useCallback(async () => {
    const data = await getProgramList();
    setProgramList(() => data);
  }, [setProgramList]);

  const addProgram = () => {
    if (_.isEmpty(_.trim(inputValue))) {
      return Toast.fail('请输入节目名称');
    }

    const id = (_.last(programList) || { id: 0 }).id + 1;
    setProgramList(draft => {
      draft.push({ id, name: inputValue });
    });
    setInputValue('');
  };

  const delProgram = (id: number) => {
    setProgramList(draft => _.reject(draft, { id }));
  };

  return {
    state: {
      programList,
      inputValue,
    },
    methods: {
      changeInputValue,
      fetchData,
      addProgram,
      delProgram,
    },
  };
};
