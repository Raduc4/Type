import { combineReducers } from "redux";
import repositoriesReducer from "./repoReducer";

export const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export type RootState = ReturnType<typeof reducers>;
