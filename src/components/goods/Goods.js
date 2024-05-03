import './goods.css'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setItemInCart, deleteItemFromCart } from '../../store/cart/goodsSlice';
import { Link, useNavigate } from 'react-router-dom';
import { setCurrentGame } from '../../store/good-page/reduser'
import { Button } from '../button';


export default function Goods({ props }) {

    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.itemsInCart);
    const isItemInCart = items.some((item) => item.id === props.id);
    const navigate = useNavigate();

    const handelClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(props.id));
        } else {
            dispatch(setItemInCart(props));
        }
    };

    const openItem = () => {
        dispatch(setCurrentGame(props));
        navigate(`goods/${props.id}`);
    };

    return (
        <div className='googs-item'>
            <img src={props.image} alt="" />
            <p><b>{props.titel}</b></p>
            <p>Price {props.cost} uah</p>
            <div className='googs-item_btn'>
                <Button
                    onClick={openItem}
                >
                    More
                </Button>
                <Button
                    data-key={props.id}
                    onClick={handelClick}
                >
                    {isItemInCart ? "Remove" : "To cart"}
                </Button>
            </div>
            {/* <Link key={props.id} to={`goods/${props.id}`}> */}
            {/* <button onClick={openItem}>Смотреть товар</button> */}
            {/* </Link> */}
        </div >
    )
}

