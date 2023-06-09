import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import './PokeItem.css';

const PokeItem = (props) => {

    const [pokeData, setPokeData] = useState([]);
    const [loadMore, setLoadMore] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
            const data = await response.json()
            setPokeData(data.results);
            setLoadMore(data.next);
        }
        fetchPokemon();
    },[])

    const loadMoreHandler = async () => {
        console.log(loadMore)
        const response = await fetch(loadMore);
        const data = await response.json();
        setPokeData(data.results);
    };

    return (
        <>
            <div className="poke-item">
                {pokeData.map((pokemon) => {
                    return <Card key={pokemon.url}
                        name={pokemon.name}
                        url={pokemon.url} />
                })}
            </div>
            <button type="button" onClick={loadMoreHandler} className="btn btn-dark">Load More</button>
        </>
    )
}

export default PokeItem;

