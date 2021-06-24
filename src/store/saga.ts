import { all } from "redux-saga/effects";
import {tableItemsSaga} from "./ducks/tableItems/sagas";

export default function* rootSaga() {
    yield all([
        tableItemsSaga(),
    ])
}