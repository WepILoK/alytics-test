import React, {useState} from "react";
import {useDispatch} from "react-redux";

import {sortingTableItems} from "../../../../store/ducks/tableItems/actionCreators";

import './SortingBlockStyle.scss'


export const SortingBlock: React.FC = () => {
    const [sortType, setSortType] = useState<'desc' | 'asc'>('desc')
    const dispatch = useDispatch()

    const applySorting = (sorting: string): void => {
        dispatch(sortingTableItems({cell: sorting, sort: sortType}))
        if (sortType === 'desc') setSortType('asc')
        else setSortType('desc')
    }

    return (
        <div className='sorting-block'>
            <div className='sources-traffic'>
                Название
            </div>
            <div className='traffic'>
                <div onClick={() =>applySorting('traffic.screenings')}>
                    Показы
                </div>
                <div onClick={() =>applySorting('traffic.clicks')}>
                    Клики
                </div>
                <div onClick={() =>applySorting('traffic.sessions')}>
                    Сеансы
                </div>
                <div onClick={() =>applySorting('traffic.ctr')}>
                    CTR, %
                </div>
                <div onClick={() =>applySorting('traffic.clickCost')}>
                    Цена клика
                </div>
                <div onClick={() =>applySorting('traffic.expenses')}>
                    Затраты
                </div>
            </div>
            <div className='sales'>
                <div onClick={() =>applySorting('sales.quantity')}>
                    Кол-во
                </div>
                <div onClick={() =>applySorting('sales.cpa')}>
                    CPA
                </div>
                <div onClick={() =>applySorting('sales.proceeds')}>
                    Выручка
                </div>
            </div>
            <div className='target'>
                <div onClick={() =>applySorting('target.quantity')}>
                    Кол-во
                </div>
                <div onClick={() =>applySorting('target.cpa')}>
                    CPA
                </div>
                <div onClick={() =>applySorting('target.cr')}>
                    CR, %
                </div>
            </div>
        </div>
    )
}