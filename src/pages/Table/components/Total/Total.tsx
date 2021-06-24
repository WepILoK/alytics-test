import React from "react";

import {Sales, Target, Traffic} from "../NumbersBlocks/NumbersBlocks";

import './TotalStyle.scss'


export const Total: React.FC = () => {

    return (
        <div className='total'>
            <div className='title'>
                Итого
            </div>
            <Traffic screenings={327872}
                     clicks={6889} sessions={5325}
                     ctr={2.1} clickCost={11.06}
                     expenses={76195}/>
            <Sales quantity={1047.93} cpa={72.54} proceeds={2150944.43}/>
            <Target quantity={89} cpa={85.54} cr={1.43}/>
        </div>
    )
}