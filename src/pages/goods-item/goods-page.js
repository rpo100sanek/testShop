
import React from "react";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router";
import { selectPokemon } from "../../store/good-page/reduser";
import { Button } from "../../components/button";
import './goods-page.css';
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../../apollo/pokemons";

export const ItemPage = () => {
    const pokemon = useSelector(selectPokemon);
    let navigate = useNavigate();
    let { id } = useParams();

    function onDismiss() {
        navigate(-1);
    }

    const { loading, error, data } = useQuery(GET_POKEMON, {
        variables: {
            name: id
        },
    });

    if (loading) return null;

    if (error) return `No goods found with id: ${id}  ${error}`;

    return (
        <div className="goods-page">
            <div className="goods-page__content">

                <div className="goods-page__left">
                    <img src={data.pokemon.image} alt="" />
                </div>
                <div className="goods-page__right">
                    <h1 className="goods-page__title">{data.pokemon.name}</h1>

                    <p>Max HP {data.pokemon.maxHP} points</p>

                    <p>Attack: </p>
                    <ul>
                        {data.pokemon.attacks.fast.map(item => (
                            <li key={item.name}>Name: {item.name} // type: {item.type} // damage = {item.damage} points</li>
                        ))}
                    </ul>

                    <p>Resistant: </p>
                    <ul>
                        {data.pokemon.resistant.map(item => (
                            <li key={item}>{item} </li>
                        ))}
                    </ul>

                    <p>Price <b>{data.pokemon.maxCP}</b> uah</p>
                    <Button
                        onClick={onDismiss}
                    >
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
};
