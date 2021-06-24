import {RootState} from "../../store";
import {IState} from "./contracts/state";

export const selectTableItemsState = (state: RootState): IState => state.tableItems

export const selectTableItems = (state: RootState): IState['tableItems'] =>
    selectTableItemsState(state).tableItems