import { combineReducers } from "redux";
import characterReducer from "./characters/charactersReducer";

const reducers = combineReducers({
  characters: characterReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
