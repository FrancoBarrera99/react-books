import React from 'react'
import BookCard from '../components/BookCard'

const SearchBooks = () => {

  const books = [
    {
      id: 1,
      name: "Beautiful World, Where Are You",
      cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618329605l/56597885.jpg",
      rating: 3,
      authors: [
        'Sasha Mullok',
        'Pedro Sanz'
      ]
    },
    {
      id: 2,
      name: "Beautiful World, Where Are You",
      cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618329605l/56597885.jpg",
      rating: 3,
      authors: [
        'Sasha Mullok',
        'Pedro Sanz'
      ]
    },
    {
      id: 3,
      name: "Beautiful World, Where Are You",
      cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618329605l/56597885.jpg",
      rating: 3,
      authors: [
        'Sasha Mullok',
        'Pedro Sanz'
      ]
    },
    {
      id: 4,
      name: "Beautiful World, Where Are You",
      cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618329605l/56597885.jpg",
      rating: 3,
      authors: [
        'Sasha Mullok',
        'Pedro Sanz'
      ]
    },
    {
      id: 5,
      name: "Beautiful World, Where Are You",
      cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618329605l/56597885.jpg",
      rating: 3,
      authors: [
        'Sasha Mullok',
        'Pedro Sanz'
      ]
    },
    {
      id: 6,
      name: "Beautiful World, Where Are You",
      cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618329605l/56597885.jpg",
      rating: 3,
      authors: [
        'Sasha Mullok',
        'Pedro Sanz'
      ]
    },
    {
      id: 7,
      name: "Beautiful World, Where Are You",
      cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618329605l/56597885.jpg",
      rating: 3,
      authors: [
        'Sasha Mullok',
        'Pedro Sanz'
      ]
    }
  ]

  return (
    <div className='flex w-full h-full'>
      <div 
        className='grid grid-cols-1 auto-cols-fr auto-rows-fr rounded-md w-full gap-x-6 gap-y-12 mx-4 my-12 
        sm:grid-cols-1 sm:px-10 
        lg:grid-cols-2 lg:px-16
        2xl:grid-cols-3 2xl:px-20 '
        >
        {
          books.map(el => {
            return (
              <BookCard
                key={el.id}
                name={el.name}
                cover={el.cover}
                rating={el.rating}
                authors={el.authors}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default SearchBooks