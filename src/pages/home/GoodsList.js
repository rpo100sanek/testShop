import React from 'react';
import Goods from '../../components/goods/Goods';
import goodsList from '../../store/data.json';
import './container.css'

export default function GoodsList() {
    return (
        <>
            <div className='goods_box'>
                {goodsList.map(item =>
                    <Goods key={item.id} props={item} />)}
            </div>
        </>
    )
}