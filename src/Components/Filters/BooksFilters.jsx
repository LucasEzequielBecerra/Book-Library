
const BooksFilters = () => {
  return (
    <section className="flex justify-between items-center px-2">
    <div>
      <input className="p-1 rounded-md bg-gray-800" type="text" placeholder="Harry Potter, El principito ..." />
    </div>
    <div className="flex gap-5">
      <div>
        <label htmlFor="filterGenre" className="flex flex-col">
        Filtrar por genero:
        </label>
        <select className="w-full p-1 bg-gray-800" name='filterGenre' type="checkbox">
          <option  value="Todos" >Todos</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="filterPages">
        Filtrar por paginas:
        </label>
        <input className="text-black outline-none " name="filterPages" type="range" />
      </div>
    </div>
  </section>
  )
}

export default BooksFilters