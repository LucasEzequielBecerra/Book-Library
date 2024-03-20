import React, { useContext } from 'react'
import BookCard from '../Books/BookCard'
import bookContext from "../../context/bookListContext"


const HomeHeader = () => {
  const {libraryData} = useContext(bookContext)
    const booksInTendency = libraryData.slice(0,4)
  return (
    <header className='bg-[#E5E0FF] rounded-br-[15rem] w-full pt-5'>
        <div className='w-9/12 mx-auto mb-10'>
            <h2 className='text-[4rem] tracking-wider font-semibold'>This are a few recommendations for you...</h2>
        </div>
        <div className='flex  w-4/5 mx-auto gap-24 pb-24'>
            {booksInTendency.map(book => <BookCard key={book.ISBN} book={book}/>)}
        </div>
    </header>
  )
}

export default HomeHeader