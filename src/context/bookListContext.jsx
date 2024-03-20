import { createContext, useState } from "react";
import { booksData } from "../services/getBooks";
import { booksAvailable, maxMinPages } from "../utils/getManMixPages";
import useLocalStorage from "../hooks/useLocalStorage";


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

console.log(libraryData)

export function BooksContextProvider(props) {
  const [library, setLibrary] = useLocalStorage('library', libraryData)
  console.log(library)
  const [filters, setFilters] = useState(initialFilters)
  const [readList, setReadList] = useLocalStorage('readList', [])
  const [alreadyReadList, setAlreadyReadList] = useLocalStorage('alreadyReadList', [])
  const [openList, setOpenList] = useState()


  function updateFilters(filter, value) {
    setFilters({ ...filters, [filter]: value })
  }

  function addItem(book) {
    if (readList.some(b => b.ISBN === book.ISBN)) return
    const newReadList = []
    newReadList.push(...readList, book)
    setReadList(newReadList)

    const indexLibrary = library.findIndex(b => b.ISBN === book.ISBN)
    library.splice(indexLibrary, 1)
    library.push({ ...book, inList: true })
    setLibrary(library)
  }

  function removeItem(id) {
    const newReadList = readList.filter(book => book.ISBN !== id)
    setReadList(newReadList)
    const newAlreadyReadList = alreadyReadList.filter(book => book.ISBN !== id)
    setAlreadyReadList(newAlreadyReadList)

    const newLibrary = library.map(b => {
      if (b.ISBN === id) {
        return { ...b, inList: false }
      }
      return b
    })
    setLibrary(newLibrary)
  }

  function readItem(book) {
    const newAlreadyReadList = alreadyReadList
    const readBook = readList.find(b => b.ISBN === book.ISBN)
    newAlreadyReadList.push(readBook)
    setAlreadyReadList(newAlreadyReadList)
    const newBookList = readList.filter(b => b.ISBN !== book.ISBN)
    setReadList(newBookList)
  }

  const filteredLibrary = library.filter((book) => {
    const { pages, genre, search } = filters
    const matchPages = pages === 0 || book.pages <= pages
    const matchGenre = genre === 'all' || book.genre === genre
    const matchSearch = !search || book.title.toLowerCase().includes(search.toLowerCase())

    return matchPages && matchGenre && matchSearch
  })
  console.log(filteredLibrary)

  const numberOfBooksAvailable = booksAvailable(filteredLibrary, readList, alreadyReadList)

  return (
    <bookContext.Provider value={{ alreadyReadList, addItem, removeItem, readList, openList, setOpenList, library, readItem, filteredLibrary, updateFilters, filters, maxMinPages, numberOfBooksAvailable,libraryData }}>
      {props.children}
    </bookContext.Provider>
  )
}

export default bookContext