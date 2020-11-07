import React, { useEffect } from 'react';
import { Button, InputItem, List, Icon } from 'antd-mobile';
import { getProgramList } from 'api/userApi';
import css from './index.less';
import { useModel } from './useModel';

const ProgramList: React.FC = () => {
  const { state, methods } = useModel();
  const { inputValue, programList } = state;
  const { updateProgramList, changeInputValue, addProgram, delProgram } = methods;

  useEffect(() => {
    getProgramList().then(data => {
      updateProgramList(data);
    });
  }, [updateProgramList]);

  return (
    <div>
      <div className={css.formItem}>
        <InputItem value={inputValue} onChange={changeInputValue} className={css.input} placeholder="请输入王鸥参加过的综艺" />
        <Button onClick={addProgram} className={css.addBtn} size="small" type="primary">
          添加
        </Button>
      </div>
      <List>
        {programList.map(({ id, name }) => {
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
