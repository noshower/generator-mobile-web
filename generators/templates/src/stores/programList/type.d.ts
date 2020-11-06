type Program = {
  id: number;
  name: string;
};

export type ProgramListStore = {
  list: Program[];
  inputValue: string;
};

export type Action =
  | {
      type: 'initial';
      payload: Program[];
    }
  | {
      type: 'add';
      payload: Program;
    }
  | {
      type: 'delete';
      payload: number;
    }
  | {
      type: 'changeInputValue';
      payload: string;
    };

export type Context = [ProgramListStore, React.Dispatch<Action>];
