import React from "react";

import './HeaderStyle.scss'


export const Header: React.FC = () => {
    return (
        <div className='header'>
            <div className='sources-traffic'>
                <div className='title'>
                    Источники трафика
                </div>
            </div>
            <div className='traffic'>
                <div className='title'>
                    Трафик
                </div>
            </div>
            <div className='sales'>
                <div className='image-and-title'>
                    <img src='https://testing1.alytics.ru/images/multichannel/crm.png' alt='CRM icon'/>
                    <div className='title'>Продажи</div>
                </div>
                <div className='image-and-title gray'>
                    <img src='https://testing1.alytics.ru/images/goal_models/png/model_linear.png' alt='icon'/>
                    <div>Линейная модель</div>
                </div>
            </div>
            <div className='target'>
                <div className='image-and-title'>
                    <img src='https://testing1.alytics.ru/images/multichannel/composite.png' alt='icon'/>
                    <div className='title'>Цель с осн. GA</div>
                </div>
                <div className='image-and-title gray'>
                    <img src='https://testing1.alytics.ru/images/goal_models/png/composite.png' alt='icon'/>
                    <div>Составная цель</div>
                </div>
            </div>
        </div>
    )
}