import React from 'react';

import './card.styles.css';

export const Card = ({monster}) => (
    <div className='card-container' onClick={(e) => alert(monster.name.toLowerCase())}>
        <img alt="monster" src={`https://robohash.org/${monster.id}?set=set5&size=180x180`} />
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>
    </div>
);