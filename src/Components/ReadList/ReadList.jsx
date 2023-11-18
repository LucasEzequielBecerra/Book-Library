import { useContext } from "react"
import BookListCard from "./BookListCard"
import bookContext from "../../context/bookListContext"

const ReadList = () => {
    const { openList, listBooks, removeItem } = useContext(bookContext)
    return (
        <aside className={openList ? 'absolute right-0 top-80 bg-red-800 p-5 pr-10 flex flex-col w-[600px]' : 'none'}>
            <section className="w-full">
                <div className="py-2 border-b mx-2">
                    <h2 className="text-xl">Books for read</h2>
                </div>
                <div className="flex flex-col">
                    {
                        listBooks.map(book => <BookListCard key={book.ISBN} book={book} removeBook={removeItem} />)
                    }
                </div>
            </section>
            <section>
                Reads books
            </section>
        </aside>
    )
}

export default ReadList