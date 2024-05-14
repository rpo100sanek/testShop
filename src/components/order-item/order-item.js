import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../../store/cart/goodsSlice';

import './order-item.css';
import { IoMdCloseCircleOutline } from 'react-icons/io';

export const OrderItem = ({ item }) => {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
        dispatch(deleteItemFromCart(item.id))
    }
    return (
        <div className="order-item">
            <div className="order-item__title">
                <img src={item.image} alt="" />
                <span> {item.name} </span>
            </div>
            <div className="order-item__price">
                <span>{item.maxCP} uah.</span>
                <IoMdCloseCircleOutline
                    color="red"
                    size={20}
                    onClick={handleDeleteClick}
                    className="cart-item__delete-icon"
                />
            </div>
        </div>
    )
}