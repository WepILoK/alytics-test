import {call, put, takeLatest} from 'redux-saga/effects';

import {Api} from "../../../api/api";
import {IState} from "./contracts/state";
import {ActionsType, ISortingTableItems} from "./contracts/actionTypes";
import {setTableItems} from "./actionCreators";


export function* fetchTableItemsRequest() {
    try {
        const items: IState['tableItems'] = yield call(Api.fetchTableItems)
        yield put(setTableItems(items))
    } catch (error) {
        new Error(error)
    }
}

export function* sortingTableItemsRequest({payload}: ISortingTableItems) {
    try {
        const items: IState['tableItems'] = yield call(Api.sortingTableItems, payload)
        yield put(setTableItems(items))
    } catch (error) {
        new Error(error)
    }
}


export function* tableItemsSaga() {
    yield takeLatest(ActionsType.FETCH_TABLE_ITEMS, fetchTableItemsRequest)
    yield takeLatest(ActionsType.SORTING_TABLE_ITEMS, sortingTableItemsRequest)
}