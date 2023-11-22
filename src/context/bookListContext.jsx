import { createContext, useState } from "react";
import { booksData } from "../services/getBooks";

const bookContext = createContext({
    listBooks: []
})

export function BooksContextProvider(props) {
    const [library, setLibrary] = useState(booksData.library)
    const [listBooks, setListBooks] = useState([])
    const [readList, setReadList] = useState([])
    const [openList, setOpenList] = useState()
    console.log(openList)

    function addItem(book) {
        if (listBooks.some(b => b.ISBN === book.ISBN)) return
        const newListBooks = []
        newListBooks.push(...listBooks, book)
        setListBooks(newListBooks)

        const index = library.findIndex(b => b.book.ISBN === book.ISBN)
        library.splice(index, 1)
        library.push({ book: { ...book, inList: true } })
        setLibrary(library)
    }
    function removeItem(id) {
        const newBooksList = listBooks.filter(book => book.ISBN !== id)
        setListBooks(newBooksList)
        const newReadList = readList.filter(book => book.ISBN !== id)
        setReadList(newReadList)

        const newLibrary = library.map(b => {
            if (b.book.ISBN === id) {
                return { book: { ...b.book, inList: false } }
            }
            return b
        })
        setLibrary(newLibrary)
    }

    function readItem(book) {
        const newReadList = readList
        const readBook = listBooks.find(b => b.ISBN === book.ISBN)
        newReadList.push(readBook)
        setReadList(newReadList)
        const newBookList = listBooks.filter(b => b.ISBN !== book.ISBN)
        setListBooks(newBookList)
    }

    return (
        <bookContext.Provider value={{ readList, addItem, removeItem, listBooks, openList, setOpenList, library, readItem }}>
            {props.children}
        </bookContext.Provider>
    )
}

export default bookContext