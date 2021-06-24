import produce, {Draft} from "immer";

import {IState} from "./contracts/state";
import {ActionsType, IActions} from "./contracts/actionTypes";


const initialState: IState = {
    tableItems: [],
}

export const tableItemsReducer = produce((draft: Draft<IState>, action: IActions) => {
    switch (action.type) {
        case ActionsType.SET_TABLE_ITEMS:
            draft.tableItems = action.payload
            break;
        default:
            break;
    }
}, initialState)