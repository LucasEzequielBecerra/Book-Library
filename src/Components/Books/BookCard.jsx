// import { useContext } from "react"
// import bookContext from "../../context/bookListContext"

import { useState } from "react"

const BookCard = ({ book }) => {
  const [viewInfo, setViewInfo] = useState(false)
  // const { addItem } = useContext(bookContext)
  return (
    <article onClick={()=>setViewInfo(!viewInfo)} className={`gap-3 h-full w-72 flex flex-col justify-between items-center p-1 rounded-md ${!book.inList ? 'opacity-100' : 'opacity-10'}`}>
      <picture className={viewInfo ? 'relative border-2 border-[#1A1241] rounded-3xl' : ''}>
        <img className={viewInfo ? 'h-[336px] w-56 blur-sm backdrop-blur-2xl rounded-3xl' : 'shadow-xl h-[336px] w-56' } rounded-sm src={book.cover} alt="" />
      </picture>
{viewInfo && (

      <div className="absolute">
        <div className="flex justify-center">
          <h2 className="text-2xl w-52 min-h-[90px] mt-4 text-center text-white text-shadow">
          {book.title}
          </h2>
        </div>
        <div>
          <p className="text-sm mt-1 text-white w-52 text-center text-shadow min-h-[80px] max-h-[80px]">
            {book.synopsis}
          </p>
        </div>
        <div className="flex justify-center">
          <p className="text-white w-40 font-bold mt-4 text-shadow">{book.rating}</p>
        </div>
        <div></div>
      </div>
)}

      <div className="w-full flex flex-col items-center min-h-[80px]">
        <h2 className="overflow text-center max-w-[200px] text-xl font-semibold">
        {book.title}
        </h2>
        <h3 className="text-sm">
         {book.author.name}
        </h3>
        </div>
        {/* <h3>
          Pages: <span className="text-red-400">{book.pages}</span>
        </h3>
      <button onClick={() => { addItem(book) }} className="bg-zinc-700 p-2 rounded-full">
        Add to list
      </button> */}
    </article>
  )

}

export default BookCard