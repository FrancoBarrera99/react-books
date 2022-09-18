import React from 'react'
import { GoSearch } from 'react-icons/go'



const Header = () => {
    return (
        <div className='flex bg-gray-700 w-full h-auto p-3'>
            <a href="#home" className='no-underline p-2'>
                <img
                    src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-bookshelf-education-xnimrodx-lineal-gradient-xnimrodx.png"
                    alt='books'
                    className='w-14 h-full'
                />
            </a>
            <form className='flex relative items-center justify-center w-screen'>
                <input
                    type="text"
                    placeholder='Enter a book name...'
                    className='w-96 rounded-md p-2'
                />
                <button className='text-xl text-white px-3'><GoSearch /></button>
            </form>
        </div>
    )
}

export default Header