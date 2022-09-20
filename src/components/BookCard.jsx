import React from 'react'
import { HiStar } from 'react-icons/hi'

const BookCard = ({ name, cover, rating, authors }) => {
    return (
        <div className=' p-2 rounded-lg shadow-xl hover:scale-105 transition-transform cursor-pointer
            sm:shadow-none'
        >
            <div 
                className='flex flex-col justify-center items-center relative rounded-lg overflow-hidden h-fit shadow-2xl 
                sm:flex-row sm:overflow-visible sm:shadow-none'
                >
                <img
                    src={cover}
                    alt=""
                    className='w-auto h-auto object-scale-down
                    sm:w-56 sm:rounded-xl sm:shadow-xl'
                />
                <div
                    className='flex flex-col items-center text-center absolute w-full bg-gray-700 bottom-0 text-gray-50 
                    sm:static sm:rounded-r-xl sm:shadow-xl sm:w-48 sm:h-56 sm:justify-center'
                    >
                    <h1 className='p-3 font-bold font-serif'>{name}</h1>
                    <div className='flex px-3 text-gray-400'>
                        <p>{
                            authors.map((el, i) => {
                                return (
                                    i + 1 !== authors.length ?
                                        el.concat(" · ")
                                        :
                                        el
                                )
                            })
                        }</p>
                    </div>
                    <div className='flex items-center text-md px-3 pb-3'>
                        <HiStar className='text-yellow-300' />
                        <p >{rating}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard