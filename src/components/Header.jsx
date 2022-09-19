import React from 'react'
import { GoSearch } from 'react-icons/go'



const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-gray-700 w-full h-auto p-3 md:flex-row'>
            <a href="#home" className='no-underline py-2 px-4'>
                <img
                    src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-bookshelf-education-xnimrodx-lineal-gradient-xnimrodx.png"
                    alt='books'
                    className='w-14 h-full'
                />
            </a>
            <form className='flex relative w-full py-2 px-4 items-center justify-center md:w-3/4'>
                <input
                    type="text"
                    placeholder='Enter a book name...'
                    className='w-full rounded-l-md p-2'
                />
                <button className='text-xl text-white p-2.5 rounded-r-md bg-gray-600'><GoSearch /></button>
            </form>
        </div>
    )
}

export default Header