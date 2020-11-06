import React, { useContext } from 'react';
import { Button, InputItem, Toast, List, Icon } from 'antd-mobile';
import { confirm } from 'components/modal';

import { ProgramListContext } from 'stores/programList/provider';
import _ from 'lodash-es';
import css from './index.less';

const ProgramList: React.FC = () => {
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

  return (
    <div>
      <div className={css.formItem}>
        <InputItem value={inputValue} onChange={onChange} className={css.input} placeholder="请输入王鸥参加过的综艺" />
        <Button onClick={addProgram} className={css.addBtn} size="small" type="primary">
          添加
        </Button>
      </div>
      <List>
        {list.map(({ id, name }) => {
          return (
            <List.Item key={id}>
              <div className={css.item}>
                <div className={css.content}>
                  <span className={css.order}>{id}.</span>
                  {name}
                </div>
                <Icon type="cross-circle" onClick={() => delProgram(id)} />
              </div>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};
export default ProgramList;
