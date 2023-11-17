
const BookCard = ({book}) => {
        return (
      <article className="gap-3 h-full w-52 flex flex-col justify-between items-center p-1 rounded-md">
        <picture className="p-3 bg-gray-800 rounded-md">
          <img className="h-64" src={book.cover} alt="" />
        </picture>
        <div className="w-full min-h-[80px]">
        <h3 className="truncate">
          Title: <span className="text-red-400">{book.title}</span> 
        </h3>
        <h3>
          Author: <span className="text-red-400">{book.author.name}</span> 
        </h3>
        <h3>
          Pages: <span className="text-red-400">{book.pages}</span> 
        </h3>
        </div>
        <button className="bg-zinc-700 p-2 rounded-full">
          Add to list
        </button>
      </article>
          
        )
      
}

export default BookCard