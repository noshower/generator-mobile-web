export type UseModel<S = {}, M = {}, P = {}> = {
  (): { state: S; methods: M };
};
