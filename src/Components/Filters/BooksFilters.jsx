import { useContext } from "react"
import bookContext from "../../context/bookListContext"
import useFilters from "../../hooks/useFilters";

const BooksFilters = () => {
  const { filters, maxMinPages } = useContext(bookContext)
  const { handleGenreChange, handleRangeChange, handleSearch } = useFilters()



  return (
    <section className="flex flex-col justify-between items-center px-2">
        <nav className="w-3/5 p-3 mx-auto rounded-full bg-[#4C60FF] mb-2">
        <ul className="flex justify-around">
          <li className="text-3xl">My Bookshelf</li>
          <li className="text-3xl">My Bookshelf</li>
          <li className="text-3xl">My Bookshelf</li>
        </ul>
      </nav>
      <h2 className="text-[40px] mb-5 font-bold tracking-wider
      ">Find your favorite books </h2>
      <div className="flex justify-between items-center w-4/5"> 
        <div className="flex items-center gap-4 w-1/5">
          <input className="p-3 w-full rounded-full text-[#F5F5F5] placeholder:text-[#F5F5F5] outline-none bg-[#4C60FF]" type="text" placeholder="Harry Potter, El principito ..." onChange={handleSearch} />
        </div>
        <div className="flex flex-col ">
            <label className="text-lg" htmlFor="filterPages">
              Filter by max pages
            </label>
            <input className="text-black outline-none" min={maxMinPages.min} max={maxMinPages.max} value={filters.pages} onChange={handleRangeChange} name="filterPages" type="range" />
            <p className="text-sm">Pages: {filters.pages}</p>
        </div>
      </div>
      <div className="flex gap-10 justify-center mt-10 [&>button]:w-[296px] [&>button]:h-[60px] [&>button]:text-2xl ">
        <button className="hover:scale-105 transition-all hover:bg-[#4c60ff]/80" onClick={(e)=> handleGenreChange(e)} name="Fantasía">Fantasy</button>
        <button className="hover:scale-105 transition-all hover:bg-[#4c60ff]/80" onClick={(e)=> handleGenreChange(e)} name="Ciencia ficción">Fiction Science</button>
        <button className="hover:scale-105 transition-all hover:bg-[#4c60ff]/80" onClick={(e)=> handleGenreChange(e)} name="Zombies">Zombies</button>
        <button className="hover:scale-105 transition-all hover:bg-[#4c60ff]/80" onClick={(e)=> handleGenreChange(e)} name="Suspenso">Suspense</button>
        <button className="hover:scale-105 transition-all hover:bg-[#4c60ff]/80" onClick={(e)=> handleGenreChange(e)} name="Terror">Terror</button>
      </div>
    </section>
  )
}

export default BooksFilters