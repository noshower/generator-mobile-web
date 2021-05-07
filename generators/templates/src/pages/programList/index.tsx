import React, { useEffect } from 'react';
import { Button, InputItem } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import { Icon } from 'widgets/index';
import css from './index.less';
import { useModel } from './useModel';

const ProgramList: React.FC = () => {
  const history = useHistory();
  const { state, methods } = useModel();
  const { inputValue, programList } = state;
  const { fetchData, changeInputValue, addProgram, delProgram } = methods;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
      {programList.map(({ id, name }) => (
        <div key={id} className={css.item}>
          <button type="button" className={css.content} onClick={goto}>
            <span className={css.order}> {id}. </span>
            {name}
          </button>
          <Icon type="quxiao" onClick={() => delProgram(id)} />
        </div>
      ))}
    </div>
  );
};
export default ProgramList;
