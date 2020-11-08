import React, { useEffect } from 'react';
import { Button, InputItem, Icon } from 'antd-mobile';
import { getProgramList } from 'api/demoApi';
import { useHistory } from 'react-router-dom';
import css from './index.less';
import { useModel } from './useModel';

const ProgramList: React.FC = () => {
  const history = useHistory();
  const { state, methods } = useModel();
  const { inputValue, programList } = state;
  const { updateProgramList, changeInputValue, addProgram, delProgram } = methods;

  useEffect(() => {
    getProgramList().then(data => {
      updateProgramList(data);
    });
  }, [updateProgramList]);

  const goto = () => {
    history.push('/detail');
  };

  return (
    <div>
      <div className={css.formItem}>
        <InputItem value={inputValue} onChange={changeInputValue} className={css.input} placeholder="请输入王鸥参加过的综艺" />
        <Button onClick={addProgram} className={css.addBtn} size="small" type="primary">
          添加
        </Button>
      </div>
      {programList.map(({ id, name }) => {
        return (
          <div key={id} className={css.item} onClick={goto}>
            <div className={css.content}>
              <span className={css.order}>{id}.</span>
              {name}
            </div>
            <Icon type="cross-circle" onClick={() => delProgram(id)} />
          </div>
        );
      })}
    </div>
  );
};
export default ProgramList;
