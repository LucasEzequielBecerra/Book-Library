import mockBooks from '../../lib/books.json'

function getBooks() {
    return mockBooks
}

// async function getBooks() {
//     try {
//         const res = await fetch('../../lib/books.json')
//         const books = res.json()
//         return books
//     } catch (error) {
//         console.log(error)
//     }
// }
// console.log(getBooks())

export const booksData = getBooks()


