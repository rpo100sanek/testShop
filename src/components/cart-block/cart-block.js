import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { CartMenu } from "../cart-menu/cart-menu";
import { calcTotalPrice } from '../utils';
import { ItemsInCart } from '../items-in-cart/items-in-cart';
import { BsCart3 } from "react-icons/bs";
import "./cart-block.css";
import { Link, useNavigate } from "react-router-dom";

export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const items = useSelector((state) => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
    const navigate = useNavigate();

    const handleGoToOrderClick = useCallback(() => {
        setIsCartMenuVisible(false);
        navigate('/cart');
    }, [navigate]);

    return (
        <div className="cart-block">
            <ItemsInCart quantity={items.length} />
            {totalPrice > 0 ? (
                <span className="total-price">{totalPrice} uah.</span>
            ) : null}
            <BsCart3
                className="cart-blok_img"
                color="blue"
                size={30}
                onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
            />
            {isCartMenuVisible &&
                // <Link to="/cart">
                <CartMenu onClick={handleGoToOrderClick} />
                // </Link>
            }
        </div >
    );
};