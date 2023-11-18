import { useContext } from "react"
import BookCard from "./BookCard"
import bookContext from "../../context/bookListContext"

const BooksContainer = () => {

  const { setOpenList, openList, library } = useContext(bookContext)

  return (
    <section className="mt-10 gap-10 flex flex-col">
      <div className="flex gap-5 border-b">
        <div>
          Libros disponibles
        </div>
        <div>
          <button onClick={() => setOpenList(!openList)} className="">Lista de lectura</button>
        </div>
      </div>
      <div className="flex gap-5 flex-wrap">
        {library.map(books => <BookCard key={books.book.ISBN} book={books.book} />)}
      </div>
    </section>
  )
}

export default BooksContainer