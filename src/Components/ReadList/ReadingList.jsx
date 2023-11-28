import { useContext } from "react"
import BookListCard from "./BookListCard"
import bookContext from "../../context/bookListContext"
import BookReadCard from "./BookReadCard"

const ReadingList = () => {
    const { openList, readList, removeItem, readItem, alreadyReadList } = useContext(bookContext)
    return (
        <aside className={openList ? 'absolute z-10 right-0 top-80 bg-red-800 p-5 pr-10 flex flex-col w-[600px] ' : 'none'}>
            <section className="w-full">
                <div className="py-2 border-b mx-2">
                    <h2 className="text-2xl">Books for read</h2>
                </div>
                <div className="flex flex-col">
                    {
                        readList.length === 0 ?
                            <p className="mx-2 py-5 font-bold text-black">You haven't added any books to your list yet.</p> :
                            readList.map(book => <BookListCard key={book.ISBN} book={book} removeBook={removeItem} readItem={readItem} />)
                    }
                </div>
            </section>
            {alreadyReadList.length !== 0 &&
                <section>
                    <div className="py-2 border-b mx-2">
                        <h2 className="text-2xl">Reads books</h2>
                    </div>
                    <div className="flex flex-col">
                        {
                            alreadyReadList.map(book => <BookReadCard key={book.ISBN} book={book} removeBook={removeItem} readItem={readItem} />)
                        }
                    </div>
                </section>}
        </aside>
    )
}

export default ReadingList