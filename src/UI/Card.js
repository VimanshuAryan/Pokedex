import React, { useState } from "react";
import './Card.css';

const Card = (props) => {

    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);
    const [stats, setStats] = useState(null);
    const [type, setType] = useState(null);

    const knowMoreHandler = () => {
        const knowMore = async () => {
            const response = await fetch(props.url);
            const data = await response.json();
            console.log(data);
            setWeight(data.weight);
            setHeight(data.height);
            setStats(data.stats);
            setType(data.types[0].type.name);
        }
        knowMore();
    }

    return (
        <div className="card" style={type ? {width: '15rem', height: '20rem'} : { width: '15rem', height: '12rem' }}>
            <div className="card-body">
                <h6 className="card-title">{props.name}</h6>
                <button onClick={knowMoreHandler} className="btn btn-primary">Know More</button>
                {weight && <h6>weight - {weight}lbs</h6>}
                {height && <h6>height - {height}cms</h6>}
                {type && <h6>type - {type}</h6>}
                {stats && stats.map((stat) => {
                    return (
                        <div key = {stat.stat.url}>
                            <h6>{stat.stat.name} - {stat.base_stat}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Card;

// In cases where you need to use other units, such as 'em' or 'rem', specify the unit with the value explicitly as a string. Applying that to the padding property should result in padding: '1.5em'. In addition, these styles are not vendor-prefixed automatically, so you have to add vendor prefixes manually.