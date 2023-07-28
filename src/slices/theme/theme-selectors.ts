import { RootState } from "../../store";

export const selectTheme = (state: RootState) => {
  return state.theme;
};
