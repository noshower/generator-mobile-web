import React from 'react';
import { Button, InputItem, List, Icon } from 'antd-mobile';
import css from './index.less';
import useProgramList from './useProgramList';

const ProgramList: React.FC = () => {
  const { state, methods } = useProgramList();
  const { inputValue, list } = state;
  const { onChange, addProgram, delProgram } = methods;
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
