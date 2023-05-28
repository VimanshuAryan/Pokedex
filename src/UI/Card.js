import React from "react";
import './Card.css';

const Card = (props) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href={props.url} className="btn btn-primary">Know More</a>
                </div>
        </div>
    )
};

export default Card;