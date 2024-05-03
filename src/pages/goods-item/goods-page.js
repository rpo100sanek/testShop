
import React, { useRef } from "react";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router";
import { selectGame } from "../../store/good-page/reduser";
import { Button } from "../../components/button";
import './goods-page.css';

export const ItemPage = () => {
    const game = useSelector(selectGame);
    let navigate = useNavigate();
    let { id } = useParams();
    // let buttonRef = React.useRef(null);

    function onDismiss() {
        navigate(-1);
    }

    if (!game) { throw new Error(`No goods found with id: ${id}`) };

    return (
        <div className="goods-page">
            <div className="goods-page__content">
                <h1 className="goods-page__title">{game.titel}</h1>
                <div className="goods-page__left">
                    <img src={game.image} alt="" />
                </div>

                <p>Price {game.cost} uah</p>

                <p>Description...</p>
                <Button
                    // ref={buttonRef}
                    onClick={onDismiss}
                >
                    Close
                </Button>
            </div>
        </div>
    );
};
