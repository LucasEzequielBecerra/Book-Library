import { createContext, useState } from "react";
import { booksData } from "../services/getBooks";

const initialFilters = {
  pages: 1200,
  genre: 'all',
  search: ''
}

const bookContext = createContext({
  library: [],
  filters: initialFilters
})

const libraryData = booksData.library.map(book => book.book)


export function BooksContextProvider(props) {
  const [library, setLibrary] = useState(libraryData)
  const [filters, setFilters] = useState(initialFilters)
  const [listBooks, setListBooks] = useState([])
  const [readList, setReadList] = useState([])
  const [openList, setOpenList] = useState()


  function updateFilters(filter, value) {
    setFilters({ ...filters, [filter]: value })
  }

  function addItem(book) {
    if (listBooks.some(b => b.ISBN === book.ISBN)) return
    const newListBooks = []
    newListBooks.push(...listBooks, book)
    setListBooks(newListBooks)

    const indexLibrary = library.findIndex(b => b.ISBN === book.ISBN)
    library.splice(indexLibrary, 1)
    library.push({ ...book, inList: true })
    console.log(library)
    setLibrary(library)

  }

  function removeItem(id) {
    const newBooksList = listBooks.filter(book => book.ISBN !== id)
    setListBooks(newBooksList)
    const newReadList = readList.filter(book => book.ISBN !== id)
    setReadList(newReadList)

    const newLibrary = library.map(b => {
      if (b.ISBN === id) {
        return { book: { ...b, inList: false } }
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

  const filteredLibrary = library.filter((book) => {
    const { pages, genre, search } = filters
    const matchPages = pages === 0 || book.pages <= pages
    const matchGenre = genre === 'all' || book.genre === genre
    const matchSearch = !search || book.title.toLowerCase().includes(search.toLowerCase())

    return matchPages && matchGenre && matchSearch
  })


  const maxPages = library.reduce((prevBook, currentBook) => {
    return currentBook.pages > prevBook.pages ? currentBook : prevBook
  })

  const minPages = library.reduce((prevBook, currentBook) => {
    return currentBook.pages < prevBook.pages ? currentBook : prevBook
  })

  let maxMinPages = {
    max: maxPages.pages,
    min: minPages.pages
  }


  return (
    <bookContext.Provider value={{ readList, addItem, removeItem, listBooks, openList, setOpenList, library, readItem, filteredLibrary, updateFilters, filters, maxMinPages }}>
      {props.children}
    </bookContext.Provider>
  )
}

export default bookContext