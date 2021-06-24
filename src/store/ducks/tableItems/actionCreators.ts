import {ActionsType, IFetchTableItems, ISetTableItems, ISortingTableItems} from "./contracts/actionTypes";
import {IState} from "./contracts/state";

export const fetchTableItems = (): IFetchTableItems => ({
    type: ActionsType.FETCH_TABLE_ITEMS,
})

export const setTableItems = (payload: IState['tableItems']): ISetTableItems => ({
    type: ActionsType.SET_TABLE_ITEMS,
    payload
})

export const sortingTableItems = (payload: {cell: string, sort: string}): ISortingTableItems => ({
    type: ActionsType.SORTING_TABLE_ITEMS,
    payload
})