import React from 'react';
import PokeItem from './PokeItem';
import './Pokemon.css';

const Pokemon = (props) => {
    return (
        <div className='pokemon'>
            <PokeItem/>    
        </div>
        
    )
}

export default Pokemon;
