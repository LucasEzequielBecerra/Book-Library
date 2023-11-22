import { FaRegTrashAlt } from "react-icons/fa"

const BookReadCard = ({ book, removeBook }) => {
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
                    <button onClick={() => { removeBook(book.ISBN) }} ><FaRegTrashAlt size='1.4em' /></button>
                </div>
            </div>
        </article>
    )
}

export default BookReadCard