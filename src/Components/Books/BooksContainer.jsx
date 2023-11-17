import { getBooksData } from "../../services/getBooks"
import BookCard from "./BookCard"

const BooksContainer = () => {
  const {library} = getBooksData()


  return (
    <section className="mt-10 gap-10 flex flex-col">
    <div className="flex gap-5 border-b">
      <div>
        Libros disponibles
      </div>
      <div>
        Lista de lectura
      </div>
    </div>
    <div className="flex gap-5 flex-wrap">
      {library.map(books => <BookCard key={books.book.ISBN} book={books.book} />)}
    </div>
  </section>
  )
}

export default BooksContainer