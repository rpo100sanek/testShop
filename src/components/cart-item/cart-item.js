import React from "react";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../store/cart/goodsSlice";
import "./cart-item.css";
import { IoMdCloseCircleOutline } from "react-icons/io";


export const CartItem = ({ props }) => {
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        dispatch(deleteItemFromCart(props.id));
    };

    return (
        <div className="cart-item">
            <div className="cart-item-ico">
                <img src={props.image} alt="" />
                <span>{props.titel} </span>
            </div>

            <div className="cart-item__price">
                <span>{props.cost} uah.</span>
                <IoMdCloseCircleOutline
                    color="red"
                    size={20}
                    onClick={handleDeleteClick}
                    className="cart-item__delete-icon"
                />
            </div>
        </div>
    );
};