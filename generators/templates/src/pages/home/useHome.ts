import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { HomeContext } from 'stores/home/provider';
import { HomeStore } from 'stores/home/type';

type ReturnType = {
  state: HomeStore;
  methods: {
    onClick: () => void;
    onChange: (value: string) => void;
  };
};

export default (): ReturnType => {
  const history = useHistory();

  const [state, dispatch] = useContext(HomeContext);

  const onClick = () => {
    history.push('/itemList');
  };

  const onChange = (value: string) => {
    dispatch({ type: 'changeNick', payload: value });
  };

  return {
    state,
    methods: {
      onClick,
      onChange,
    },
  };
};
