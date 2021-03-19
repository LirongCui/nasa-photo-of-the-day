import React from 'react';

export default function PhotoCard(props){
    const {data} =props

    return (
        <div className='card-container'>
            <h3 className='photo-title'>{data.title}</h3>
            <img alt='nasa' src={data.url}/>
        </div>
    )
}