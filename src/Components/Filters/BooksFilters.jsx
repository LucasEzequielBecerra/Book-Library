import { useContext, useEffect, useState } from "react"
import bookContext from "../../context/bookListContext"

const BooksFilters = () => {
  const { updateFilters, filters } = useContext(bookContext)

  function handleGenreChange(event) {
    updateFilters('genre', event.target.value)
  }

  function handleRangeChange(e) {
    updateFilters('pages', e.target.value)
  }
  useEffect(() => {

  }, [])


  return (
    <section className="flex justify-between items-center px-2">
      <div>
        <input className="p-1 rounded-md bg-gray-800" type="text" placeholder="Harry Potter, El principito ..." />
      </div>
      <div className="flex gap-5">
        <div>
          <label htmlFor="filterGenre" className="flex flex-col">
            Filter by genre:
          </label>
          <select className="w-full p-1 bg-gray-800" name='filterGenre' value={filters.genre} type="checkbox" onChange={handleGenreChange}>
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
          <input className="text-black outline-none " min={43} max={1201} value={filters.pages} onChange={handleRangeChange} name="filterPages" type="range" />
          <p>Pages: {filters.pages}</p>
        </div>
      </div>
    </section>
  )
}

export default BooksFilters