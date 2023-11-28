import { useContext } from "react"
import bookContext from "../context/bookListContext"

const useFilters = () => {
    const { updateFilters } = useContext(bookContext)


    function handleGenreChange(event) {
        updateFilters('genre', event.target.value)
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