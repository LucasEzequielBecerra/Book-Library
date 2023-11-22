import { useContext } from "react"
import BookCard from "./BookCard"
import bookContext from "../../context/bookListContext"

const BooksContainer = () => {

  const { setOpenList, filteredLibrary } = useContext(bookContext)

  return (
    <section className={`mt-10 gap-10 flex flex-col`} >
      <div className="flex gap-5 border-b">
        <div>
          Books avaliable
        </div>
        <div>
          <button onClick={() => setOpenList(true)}>Read list</button>
        </div>
      </div>
      <div className="flex gap-5 flex-wrap">
        {filteredLibrary.map(books => <BookCard key={books.book.ISBN} book={books.book} />)}
      </div>
    </section>
  )
}

export default BooksContainer