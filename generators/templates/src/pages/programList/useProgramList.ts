import { ProgramListContext } from 'stores/programList/provider';
import { useContext } from 'react';
import { confirm } from 'components/modal';
import _ from 'lodash-es';
import { Toast } from 'antd-mobile';
import { ProgramListStore } from 'stores/programList/type';

type ReturnType = {
  state: ProgramListStore;
  methods: {
    onChange: (value: string) => void;
    addProgram: () => void;
    delProgram: (id: number) => Promise<void>;
  };
};

export default (): ReturnType => {
  const [state, dispatch] = useContext(ProgramListContext);
  const { list, inputValue } = state;

  const onChange = (value: string) => {
    dispatch({ type: 'changeInputValue', payload: value });
  };

  const addProgram = () => {
    if (_.isEmpty(_.trim(inputValue))) {
      Toast.fail('请输入节目名称');
    }
    const id = (_.last(list) || { id: 0 }).id + 1;
    dispatch({ type: 'add', payload: { id, name: inputValue } });
  };

  const delProgram = async (id: number) => {
    const isOk = await confirm({ title: '温馨提示', message: '确认删除？' });
    if (isOk) {
      dispatch({ type: 'delete', payload: id });
    }
  };

  return {
    state: { list, inputValue },
    methods: {
      onChange,
      addProgram,
      delProgram,
    },
  };
};
