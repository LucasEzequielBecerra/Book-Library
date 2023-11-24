async function getBooks() {
    try {
        const res = await fetch('../lib/books.json')
        const books = res.json()
        return books
    } catch (error) {
        console.log(error)
    }
}

export const booksData = await getBooks()


