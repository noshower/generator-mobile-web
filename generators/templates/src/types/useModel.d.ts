export type UseModel<S = {}, M extends { [key: string]: Function } = {}, P = {}> = {
  (): { state: S; methods: M };
};
