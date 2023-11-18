import { createContext, useState } from "react";
import { booksData } from "../services/getBooks";

const bookContext = createContext({
    listBooks: []
})

export function BooksContextProvider(props) {
    const [library, setLibrary] = useState(booksData.library)
    const [listBooks, setListBooks] = useState([])
    const [openList, setOpenList] = useState(false)

    function addItem(book) {
        if (listBooks.includes(book)) return
        const newListBooks = []
        newListBooks.push(...listBooks, book)
        setListBooks(newListBooks)
        const newLibrary = library.map(b => {
            if (b.book.ISBN === book.ISBN) {
                return { book: { ...book, inList: true } }
            }
            return b
        })
        setLibrary(newLibrary)
    }
    function removeItem(id) {
        const newBooksList = listBooks.filter(book => book.ISBN !== id)
        setListBooks(newBooksList)
        const newLibrary = library.map(b => {
            if (b.book.ISBN === id) {
                return { book: { ...b.book, inList: false } }
            }
            return b
        })
        setLibrary(newLibrary)
    }

    return (
        <bookContext.Provider value={{ addItem, removeItem, listBooks, openList, setOpenList, library }}>
            {props.children}
        </bookContext.Provider>
    )
}

export default bookContext