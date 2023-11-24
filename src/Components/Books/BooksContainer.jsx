import { useContext } from "react"
import BookCard from "./BookCard"
import bookContext from "../../context/bookListContext"

const BooksContainer = () => {

  const { setOpenList, filteredLibrary, listBooks } = useContext(bookContext)

  return (
    <section className={`mt-10 gap-10 flex flex-col`} >
      <div className="flex gap-5 border-b">
        <div>
          Books avaliable {filteredLibrary.length}
        </div>
        <div>
          <button onClick={() => setOpenList(true)}>Read list {listBooks.length}</button>
        </div>
      </div>
      <div className="flex gap-5 flex-wrap">
        {filteredLibrary.map(books => <BookCard key={books.ISBN} book={books} />)}
      </div>
    </section>
  )
}

export default BooksContainer