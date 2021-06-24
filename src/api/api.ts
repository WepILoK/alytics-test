import axios from "axios";
import {IState} from "../store/ducks/tableItems/contracts/state";


export const Api = {
    async fetchTableItems() {
        const {data} = await axios.get<IState['tableItems']>('/tableItems')
        return data
    },
    async sortingTableItems(settings: {cell: string, sort: string}) {
        const {data} = await axios.get<IState['tableItems']>(`/tableItems?_sort=${settings.cell}&_order=${settings.sort}`)
        return data
    },
}