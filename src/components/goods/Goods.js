import './goods.css'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setItemInCart, deleteItemFromCart } from '../../store/cart/goodsSlice';
import { useNavigate } from 'react-router-dom';
import { setCurrentPokemon } from '../../store/good-page/reduser'
import { Button } from '../button';


export default function Pokemon({ props }) {

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
        dispatch(setCurrentPokemon(props));
        navigate(`goods/${props.name}`);
    };

    return (
        <div className='googs-item'>
            <div className="pokemon">
                <div key={props.id}>
                    <h3>{props.name}</h3>
                    <img width="100" height="100" alt={props.name} src={`${props.image}`} />
                    <br />
                    <p>{props.classification}</p>
                    <p>Prise <b>{props.maxCP}</b> uah</p>
                </div>

            </div>
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

