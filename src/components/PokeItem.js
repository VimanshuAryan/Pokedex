import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import './PokeItem.css';

const PokeItem = (props) => {

    const [pokeData, setPokeData] = useState([]);

    useEffect (() => {
        const fetchPokemon = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
            const data = await response.json()
            setPokeData(data.results);
        }
        fetchPokemon();
    },[])

    // todo
    // Click on know more to get stats,height and weight

    return (
        <div className="poke-item">
            {pokeData.map((pokemon) => {
                return <Card key={pokemon.url}
                    name={pokemon.name}
                    url={pokemon.url} />
            })}
        </div>
    )
}

export default PokeItem;

