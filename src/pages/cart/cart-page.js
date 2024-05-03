
import React from "react";
import { useSelector } from 'react-redux';
import { calcTotalPrice, enumerate } from "../../components/utils";
import { OrderItem } from "../../components/order-item";
import { Button } from "../../components/button";
import './cart-page.css';


export const CartPage = () => {
    const items = useSelector((state) => state.cart.itemsInCart);

    if (items.length < 1) {
        return <h1 className="order-page">Your cart is empty!</h1>
    }

    return (
        <>
            <div className="order-page" >
                <div className="order-page_content">
                    <div className="order-page__item">
                        {items.map(game => <OrderItem key={game.id} game={game} />)}
                    </div>

                    <div className="order-page__total-price">
                        <span>{items.length} {enumerate(items.length, ['товар', 'товара', 'товаров'])} на сумму {calcTotalPrice(items)} uah.</span>
                    </div>

                </div>
                <div className="order-page_btn">
                    <Button className="btn" onClick={() => null}>
                        Payment
                    </Button>
                </div>
            </div>
        </>
    );
};
