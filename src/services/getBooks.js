import mockBooks from '../../lib/books.json'
// import { readFile } from 'fs/promises';
// import { join } from 'path'

function getBooks() {
    return mockBooks
}

// export async function getBooks() {
//     try {
//         const res = await fetch('../../lib/books.json')
//         const books = res.json()
//         return books
//     } catch (error) {
//         console.log(error)
//     }
// }

// export async function getBooks() {
//     try {
//         const url = join(__dirname, '../lib/books.json')
//         const res = await readFile(url, 'utf-8')
//         const books = JSON.parse(res)
//         return books
//     } catch (error) {
//         console.log(error)
//     }
// }
// console.log(getBooks())

export const booksData = getBooks()


