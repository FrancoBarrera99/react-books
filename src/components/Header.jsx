import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const [keyword, setKeyword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = evt => {
        evt.preventDefault()
        navigate(`/search/${keyword}`)
    }

    const handleInputChange = evt => {
        setKeyword(evt.target.value)
    } 

    return (
        <div className='flex flex-col justify-center items-center sticky top-0 z-10 bg-gray-700 w-full h-auto p-3 md:flex-row'>
            <a href="#home" className='no-underline py-2 px-4 hover:scale-110 transition-transform'>
                <img
                    src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-bookshelf-education-xnimrodx-lineal-gradient-xnimrodx.png"
                    alt='books'
                    className='w-14 h-full'
                />
            </a>
            <form 
                onSubmit={handleSubmit}
                className='flex relative w-full py-2 px-4 items-center justify-center drop-shadow-xl md:w-3/4'
                >
                <input
                    onChange={handleInputChange}
                    value={keyword}
                    type="text"
                    placeholder='Enter a book name...'
                    className='w-full rounded-l-md p-2'
                />
                <button className='text-xl text-white p-2.5 rounded-r-md bg-gray-600 hover:text-2xl transition-all'><GoSearch/></button>
            </form>
        </div>
    )
}

export default Header