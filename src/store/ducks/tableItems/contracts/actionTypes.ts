import {Action} from "redux";
import {IState} from "./state";

export enum ActionsType {
    FETCH_TABLE_ITEMS = 'tableItems/FETCH_TABLE_ITEMS',
    SET_TABLE_ITEMS = 'tableItems/SET_TABLE_ITEMS',
    SORTING_TABLE_ITEMS = 'tableItems/SORTING_TABLE_ITEMS',
}

export interface IFetchTableItems extends Action<ActionsType> {
    type: ActionsType.FETCH_TABLE_ITEMS
}

export interface ISetTableItems extends Action<ActionsType> {
    type: ActionsType.SET_TABLE_ITEMS
    payload: IState['tableItems']
}

export interface ISortingTableItems extends Action<ActionsType> {
    type: ActionsType.SORTING_TABLE_ITEMS
    payload: {cell: string, sort: string}
}


export type IActions =
    IFetchTableItems
    | ISetTableItems
    | ISortingTableItems
