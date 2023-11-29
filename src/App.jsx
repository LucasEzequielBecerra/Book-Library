import Header from "./Components/Header/Header"
import ReadingList from "./Components/ReadList/ReadingList"
import Home from "./Components/Home/Home"
import { BooksContextProvider } from "./context/bookListContext"

function App() {
  return (
    <>
      <Header />
      <BooksContextProvider>
        <Home />
        <ReadingList />
      </BooksContextProvider>
    </>
  )
}

export default App
