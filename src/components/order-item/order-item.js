import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../../store/cart/goodsSlice';

import './order-item.css';
import { IoMdCloseCircleOutline } from 'react-icons/io';

export const OrderItem = ({ game }) => {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
        dispatch(deleteItemFromCart(game.id))
    }
    return (
        <div className="order-item">
            <div className="order-item__title">
                <img src={game.image} alt="" />
                <span> {game.titel} </span>
            </div>
            <div className="order-item__price">
                <span>{game.cost} uah.</span>
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