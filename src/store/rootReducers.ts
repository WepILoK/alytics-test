import {combineReducers} from "redux";
import {tableItemsReducer} from "./ducks/tableItems/reducer";

export const rootReducers = combineReducers({
    tableItems: tableItemsReducer,
});