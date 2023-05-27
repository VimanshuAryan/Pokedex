import React from "react";
import Card from "../UI/Card";
import './PokeItem.css';

const PokeItem = (props) => {

    const data = {
        "count": 1281,
        "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
        "previous": null,
        "results": [
            {
                "name": "bulbasaur",
                "url": "https://pokeapi.co/api/v2/pokemon/1/"
            },
            {
                "name": "ivysaur",
                "url": "https://pokeapi.co/api/v2/pokemon/2/"
            },
            {
                "name": "venusaur",
                "url": "https://pokeapi.co/api/v2/pokemon/3/"
            },
            {
                "name": "charmander",
                "url": "https://pokeapi.co/api/v2/pokemon/4/"
            },
            {
                "name": "charmeleon",
                "url": "https://pokeapi.co/api/v2/pokemon/5/"
            },
            {
                "name": "charizard",
                "url": "https://pokeapi.co/api/v2/pokemon/6/"
            },
            {
                "name": "squirtle",
                "url": "https://pokeapi.co/api/v2/pokemon/7/"
            },
            {
                "name": "wartortle",
                "url": "https://pokeapi.co/api/v2/pokemon/8/"
            },
            {
                "name": "blastoise",
                "url": "https://pokeapi.co/api/v2/pokemon/9/"
            }
        ]

    }

    // async function fetchPokemon () {
    //     const response = await fetch(url);
    //     const data = await response.json();
    // }

    return (
        <div className="poke-item">
            {data.results.map((pokemon) => {
                return <Card key={pokemon.url}
                    name={pokemon.name}
                    url={pokemon.url} />
            })}
        </div>
    )
}

export default PokeItem;

// In cases where you need to use other units, such as 'em' or 'rem', specify the unit with the value explicitly as a string. Applying that to the padding property should result in padding: '1.5em'. In addition, these styles are not vendor-prefixed automatically, so you have to add vendor prefixes manually.