import { booksData } from "../services/getBooks"

const libraryData = booksData.library.map(book => book.book)

const maxPages = libraryData.reduce((prevBook, currentBook) => {
    return currentBook.pages > prevBook.pages ? currentBook : prevBook
})

const minPages = libraryData.reduce((prevBook, currentBook) => {
    return currentBook.pages < prevBook.pages ? currentBook : prevBook
})

export let maxMinPages = {
    max: maxPages.pages,
    min: minPages.pages
}

export function booksAvailable(books, readingBooks, readBooks) {
    return books.length - (readingBooks.length + readBooks.length)
}