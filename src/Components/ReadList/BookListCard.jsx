import React from 'react'

const BookListCard = ({ book, removeBook }) => {
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
            <div className="flex flex-col items-start">
                <div className="flex gap-3 pb-3">
                    <button onClick={() => { removeBook(book.ISBN) }}>Delete</button>
                    <button>Read</button>
                </div>
                <div>
                    <p>Pages read</p>
                    <p className="text-center"><span className="text-black">10</span> / {book.pages}</p>
                </div>
            </div>
        </article>
    )
}

export default BookListCard