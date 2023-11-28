import { useContext } from "react"
import bookContext from "../../context/bookListContext"
import { FaSearch } from "react-icons/fa";
import useFilters from "../../hooks/useFilters";

const BooksFilters = () => {
  const { filters, maxMinPages } = useContext(bookContext)
  const { handleGenreChange, handleRangeChange, handleSearch } = useFilters()




  return (
    <section className="flex justify-between items-center px-2">
      <div className="flex items-center gap-4">
        <input className="p-1 rounded-md bg-gray-800" type="text" placeholder="Harry Potter, El principito ..." onChange={handleSearch} />
      </div>
      <div className="flex gap-5">
        <div>
          <label htmlFor="filterGenre" className="flex flex-col">
            Filter by genre:
          </label>
          <select className="w-full p-1 bg-gray-800" name='filterGenre' value={filters.genre} type="checkbox" onChange={handleGenreChange} >
            <option value="all" >All</option>
            <option value="Fantasía" >Fantasy</option>
            <option value="Terror" >Terror</option>
            <option value="Ciencia ficción" >Science Fiction</option>
            <option value="Zombies" >Zombies</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="filterPages">
            Filter by max pages
          </label>
          <input className="text-black outline-none " min={maxMinPages.min} max={maxMinPages.max} value={filters.pages} onChange={handleRangeChange} name="filterPages" type="range" />
          <p>Pages: {filters.pages}</p>
        </div>
      </div>
    </section>
  )
}

export default BooksFilters