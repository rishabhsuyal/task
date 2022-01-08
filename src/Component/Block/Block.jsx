import React from 'react';
import './Block.css';
import Like from '../Like/Like';
function Block({ block }) {
    const { copyright, date, explanation, title, url } = block;
    return (
        <div className='container' >
            <h2>{title}</h2>
            <p>{copyright}</p>
            <img src={url} alt='image' className='image' />
            <Like />
            <p>{date}</p>

        </div>
    )
}

export default Block
