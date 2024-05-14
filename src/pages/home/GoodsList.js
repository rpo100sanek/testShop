import React from 'react';
import './container.css'
import { useQuery } from '@apollo/client';
import { GET_ALL_POKEMONS } from '../../apollo/pokemons';
import Pokemon from '../../components/goods/Goods';


export default function GoodsList() {
    const { data, loading, error } = useQuery(GET_ALL_POKEMONS, {
        variables: {
            first: 10
        }
    });

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <h2>Error...</h2>
    }

    return (
        <>
            {/* <div className='goods_box'>
                {goodsList.map(item =>
                    <Goods key={item.id} props={item} />)}

            </div> */}

            <div className="pokemons-team">
                {data.pokemons.map(data => (
                    <Pokemon
                        key={data.id}
                        props={data}
                    // onclick={() => onSelect(pokemon)}
                    />
                ))}
            </div>
        </>
    )
}