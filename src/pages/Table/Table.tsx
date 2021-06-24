import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Header} from "./components/Header/Header";
import {SortingBlock} from "./components/SortingBlock/SortingBlock";
import {Total} from "./components/Total/Total";
import {TableItem} from "./components/TableItem/TableItem";
import {fetchTableItems} from "../../store/ducks/tableItems/actionCreators";
import {selectTableItems} from "../../store/ducks/tableItems/selectors";

import './TableStyle.scss'


export const Table: React.FC = () => {
    const dispatch = useDispatch()
    const tableItems = useSelector(selectTableItems)

    useEffect(() => {
        dispatch(fetchTableItems())
    }, [])

    return (
        <div className='content'>
            <Header/>
            <SortingBlock/>
            {tableItems[0] && <Total/>}
            {tableItems.map(item => <TableItem {...item}/>)}
        </div>
    );
};