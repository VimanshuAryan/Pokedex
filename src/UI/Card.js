import React, { useState } from "react";
import './Card.css';

const Card = (props) => {

    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);
    const [stats, setStats] = useState(null);
    const [type, setType] = useState(null);
    const [show, setShow] = useState(false)
    const [pic, setPic] = useState(null);

    const knowMoreHandler = () => {
        const knowMore = async () => {
            const response = await fetch(props.url);
            const data = await response.json();
            console.log(data);
            setWeight(data.weight);
            setHeight(data.height);
            setStats(data.stats);
            setType(data.types[0].type.name);
            setPic(data.sprites.other.dream_world.front_default);
        }
        if (!show & !weight) {
            knowMore();
            
            setTimeout(() => {
                setShow(true);
                console.log(pic);
            },100)
        }
        else {
            setShow(!show);
        }
    }

    return (
        <div className="card" style={show ? { width: '15rem', height: '34rem' } : { width: '15rem', height: '12rem' }}>
            <div className="card-body">
                <h6 className="card-title">{props.name}</h6>
                
                <button onClick={knowMoreHandler} className="btn btn-dark">Know More</button>
                {show &&
                    <div>
                        <img src={pic} alt="" />
                        <h6>weight - {weight}lbs</h6>
                        <h6>height - {height}cms</h6>
                        <h6>type - {type}</h6>
                        {stats.map((stat) => {
                            return (
                        <div key={stat.stat.url}>
                            <h6>{stat.stat.name} - {stat.base_stat}</h6>
                        </div>)})
                        }
                    </div>
                }
            </div>
        </div>
    )
};

export default Card;

// In cases where you need to use other units, such as 'em' or 'rem', specify the unit with the value explicitly as a string. Applying that to the padding property should result in padding: '1.5em'. In addition, these styles are not vendor-prefixed automatically, so you have to add vendor prefixes manually.