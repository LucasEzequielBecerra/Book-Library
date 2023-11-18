import { useState } from "react"
import BooksContainer from "./Components/Books/BooksContainer"
import BooksFilters from "./Components/Filters/BooksFilters"
import Header from "./Components/Header/Header"
import ReadList from "./Components/ReadList/ReadList"
import { BooksContextProvider } from "./context/bookListContext"

function App() {
  return (
    <BooksContextProvider>
      <Header />
      <main className="mt-10 w-4/5 my-0 mx-auto">
        <BooksFilters />
        <BooksContainer />
        <ReadList />
      </main>
    </BooksContextProvider>
  )
}

export default App
