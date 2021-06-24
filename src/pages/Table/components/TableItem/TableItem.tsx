import React, {useState} from "react";

import {InItem} from "../../../../store/ducks/tableItems/contracts/state";
import {Sales, Target, Traffic} from "../NumbersBlocks/NumbersBlocks";
import plus from '../../../../assets/images/plus.png'
import minus from '../../../../assets/images/minus.png'

import './TableItemStyle.scss'


export const TableItem: React.FC<InItem> = ({name, icon, group,
                                                sources, status,
                                                traffic, target, sales}) => {
    const [visibleGroup, setVisibleGroup] = useState(false)

    const iconToggle = () => {
        setVisibleGroup(!visibleGroup)
    }

    return (
        <div className={visibleGroup ? 'active-item' : ''}>
            <div className='table-item'>
                <div className='sources-traffic'>
                    {sources
                        ? <div className='icon' onClick={iconToggle}>
                            {!visibleGroup ? <img src={plus} alt=''/> : <img src={minus} alt=''/>}</div>
                        : <div className='skip'/>}
                    <div className='item-icon'>
                        <img src={icon} alt=''/>
                    </div>
                    <div className='item-title'>
                        <div className='item-name'>
                            {name}
                        </div>
                        <div className='item-group'>
                            {group} {sources?.length}
                        </div>
                    </div>
                    {status && <div className='item-status'/>}
                </div>
                <Traffic screenings={traffic.screenings}
                         clicks={traffic.clicks}
                         sessions={traffic.sessions}
                         ctr={traffic.ctr} clickCost={traffic.clickCost}
                         expenses={traffic.expenses}/>
                <Sales quantity={sales.quantity} cpa={sales.cpa} proceeds={sales.proceeds}/>
                <Target quantity={target.quantity} cpa={target.cpa} cr={target.cr}/>
            </div>
            {visibleGroup && sources?.map(item =>
                <div>
                    <TableItem {...item}/>
                </div>)}
        </div>
    )
}