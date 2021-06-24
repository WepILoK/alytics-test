import React from "react";

import {InItem} from "../../../../store/ducks/tableItems/contracts/state";

import './NumbersBlocksStyle.scss'


const localeNumber = (numb: number): string => {
    return numb.toLocaleString('ru-RU')
}

export const Traffic: React.FC<InItem['traffic']> = React.memo(({clickCost, clicks, ctr, expenses, screenings, sessions}) => {
    return (
        <div className='total-traffic'>
            <div className='screenings'>
                {screenings !== 0 ? localeNumber(screenings) : '-'}
            </div>
            <div className='clicks'>
                {localeNumber(clicks)}
            </div>
            <div className='sessions'>
                {localeNumber(sessions)}
            </div>
            <div className='ctr'>
                {ctr !== 0 ? ctr : '-'}
            </div>
            <div className='clickCost'>
                {clickCost}
            </div>
            <div className='expenses'>
                {localeNumber(expenses)}
            </div>
        </div>
    )
})

export const Sales: React.FC<InItem['sales']> = React.memo(({quantity, cpa, proceeds}) => {
    return (
        <div className='total-sales'>
            <div className='quantity'>
                {localeNumber(quantity)}
            </div>
            <div className='cpa'>
                {localeNumber(cpa)}
            </div>
            <div className='proceeds'>
                {localeNumber(proceeds)}
            </div>
        </div>
    )
})

export const Target: React.FC<InItem['target']>= React.memo(({quantity, cpa, cr}) => {
    return (
        <div className='total-target'>
            <div className='quantity'>
                {localeNumber(quantity)}
            </div>
            <div className='cpa'>
                {localeNumber(cpa)}
            </div>
            <div className='cr'>
                {localeNumber(cr)}
            </div>
        </div>
    )
})