import React from 'react'
import { booksData } from '../../services/getBooks'
import BookCard from '../Books/BookCard'

const HomeHeader = () => {
    const booksInTendency = booksData.library.slice(0,5)
    console.log(booksInTendency)
  return (
    <header className='bg-[#E5E0FF] rounded-br-full w-full'>
        <div className='w-4/5 mx-auto'>
            <h2 className='text-5xl font-bold'>This are a few recommendations for you ...</h2>
        </div>
        <div className='w-full h-min'>
            {booksInTendency.forEach(book => <BookCard book={book.book}/>)}
        </div>
    </header>
  )
}

export default HomeHeader