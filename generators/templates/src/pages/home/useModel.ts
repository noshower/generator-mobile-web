import { UserDto } from 'api/dtos/userDto';
import { useCallback } from 'react';
import { UseModel } from 'types/useModel';
import { useImmer } from 'use-immer';
import { Methods, State } from './type';

export const useModel: UseModel<State, Methods> = () => {
  const [user, setUserInfo] = useImmer<UserDto>({
    picture: '',
    nick: '未知',
    desc: '未知',
  });

  const changeNick = (value: string) => {
    setUserInfo(draft => {
      draft.nick = value;
    });
  };

  const updateUserInfo = useCallback(
    (value: UserDto) => {
      setUserInfo(() => value);
    },
    [setUserInfo],
  );

  return {
    state: {
      user,
    },
    methods: {
      changeNick,
      updateUserInfo,
    },
  };
};
