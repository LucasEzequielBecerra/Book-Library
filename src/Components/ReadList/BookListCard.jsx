import React from 'react'
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";

const BookListCard = ({ book, removeBook, readItem }) => {
    return (
        <article className="flex gap-5 m-2 bg-red-500/20 p-3 ">
            <picture className="w-28">
                <img className="w-28" src={book.cover} alt="" />
            </picture>
            <div className="text-sm flex flex-col w-full">
                <h3 className="text-lg font-bold pb-3 max-w-[250px] text-clip overflow-hidden">{book.title}</h3>
                <p className="text-zinc-700">Genre: <span>{book.genre}</span></p>
                <p className="text-zinc-700">Author: <span>{book.author.name}</span></p>
            </div>
            <div className="flex flex-col items-center justify-between w-32 ">
                <div className="flex gap-3 pb-3">
                    <button aria-label='remove-read-button' onClick={() => { removeBook(book.ISBN) }} ><FaRegTrashAlt size='1.4em' /></button>
                    <button aria-label='already-read-button' onClick={() => { readItem(book) }}><FaCheck size='1.4em' /> </button>
                </div>
                <div>
                    <p className='text-center pb-2 text-sm'>Pages read</p>
                    <p className="text-center"><span className="text-black">10</span> / {book.pages}</p>
                </div>
            </div>
        </article>
    )
}

export default BookListCard