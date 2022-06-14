// Card.js

import React from 'react';
import './Card.css';

const Card = ({ id, title, text }) => {
    return (
        <div className='card'>
            <h3>{title}</h3>
            <p>{text}</p>
            <button>➡️</button>
        </div>
    )
}

export default Card;