import { useContext } from "react"
import BooksContainer from "./Components/Books/BooksContainer"
import BooksFilters from "./Components/Filters/BooksFilters"
import Header from "./Components/Header/Header"
import ReadingList from "./Components/ReadList/ReadingList"
import bookContext from "./context/bookListContext"

function App() {
  const { openList, setOpenList } = useContext(bookContext)
  return (
    <>
      <Header />
      <main className={`mt-10 w-4/5 my-0 mx-auto ${openList && 'blur'} realtive`}>
        <div className={openList ? 'w-screen h-screen absolute' : 'none'} onClick={() => setOpenList(false)}></div>
        <BooksFilters />
        <BooksContainer />
      </main >
      <ReadingList />
    </>
  )
}

export default App
