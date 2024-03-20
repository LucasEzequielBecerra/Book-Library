import { useContext } from "react"
import BookCard from "./BookCard"
import bookContext from "../../context/bookListContext"

const BooksContainer = () => {

  const { setOpenList, filteredLibrary, readList, numberOfBooksAvailable } = useContext(bookContext)

  console.log(filteredLibrary)
  return (
    <section className={`mt-10 gap-10 flex flex-col`} >
      {/* <div className="flex gap-5 border-b">
        <div>
          Books available {numberOfBooksAvailable}
        </div>
        <div>
          <button aria-label="toList" onClick={() => setOpenList(true)}>Read list {readList.length}</button>
        </div>
      </div> */}
    

      <div className="flex gap-5 flex-wrap">
        {filteredLibrary.map(books => <BookCard key={books.ISBN} book={books} />)}
      </div>

    </section>
  )
}

export default BooksContainer