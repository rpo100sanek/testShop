
import React from "react";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../utils";
import "./catr-menu.css";
import { Button } from "../button";
import { CartItem } from "../cart-item";

export const CartMenu = ({ onClick }) => {
    const items = useSelector((state) => state.cart.itemsInCart);
    return (
        <div className="cart-menu">
            <div className="cart-menu__games-list">
                {items.length > 0
                    ? items.map((item) => (
                        <CartItem
                            key={item.id}
                            props={item}
                        />
                    ))
                    : "Cart empty"}
            </div>
            {items.length > 0 ? (
                <div className="cart-menu__arrange">
                    <div className="cart-menu__total-price">
                        <span>Total:</span>
                        <span>{calcTotalPrice(items)} uah.</span>
                    </div>
                    <div className="cart-menu__btn">
                        <Button onClick={onClick}>
                            Order
                        </Button>
                    </div>
                </div>
            ) : null}
        </div>
    );
};
