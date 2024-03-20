import { useContext } from "react"
import bookContext from "../context/bookListContext"

const useFilters = () => {
    const { updateFilters } = useContext(bookContext)


    function handleGenreChange(event) {
        console.log(event.target.name)
        updateFilters('genre', event.target.name)
    }

    function handleRangeChange(event) {
        updateFilters('pages', event.target.value)
    }

    function handleSearch(event) {
        setTimeout(() => {
            updateFilters('search', event.target.value)
        }, 1000)
    }


    return { handleGenreChange, handleRangeChange, handleSearch }
}

export default useFilters