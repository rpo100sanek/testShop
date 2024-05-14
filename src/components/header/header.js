
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./header.css";
import { CartBlock } from "../cart-block/cart-block";
import { Button } from "../button";

export const Header = () => {
    return (
        <>
            <div className="header">
                <div className="wrapper">
                    <Link to="/" className="header__store-title">
                        <Button>
                            Pokemons cards
                        </Button>

                    </Link>
                </div>
                <div className="wrapper header__cart-btn-wrapper">
                    <CartBlock />
                </div>
            </div>
            <Outlet />
        </>
    );
};
