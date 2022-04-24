import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    console.log(title);
    return (
        <div className="card animate__animated animate__tada">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
