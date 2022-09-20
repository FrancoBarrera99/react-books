import React from 'react'

const BookDisplay = ({id, name, cover, url, authors, rating, pages, published_date, synopsis }) => {
    return (
        <div className='flex flex-col relative'>
            <img
                src={cover}
                alt=""
                className='w-40'
            />
            <h1>{name}</h1>
            
        </div>
    )
}

export default BookDisplay