import { ProgramDto } from 'api/dtos/userDto';

export type State = {
  programList: ProgramDto[];
  inputValue: string;
};

export type Methods = {
  changeInputValue(value: string): void;
  fetchData(): void;
  addProgram(): void;
  delProgram(id: number): void;
};
