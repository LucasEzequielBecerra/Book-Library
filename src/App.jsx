import BooksContainer from "./Components/Books/BooksContainer"
import BooksFilters from "./Components/Filters/BooksFilters"
import Header from "./Components/Header"

function App() {
  return(
    <>
    <Header/>
    <main className="mt-10">
    <BooksFilters/>
    <BooksContainer/>
    </main>
    </>
  )
}

export default App
