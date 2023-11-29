import React, { useContext } from 'react'
import BooksFilters from '../Filters/BooksFilters'
import BooksContainer from '../Books/BooksContainer'
import bookContext from '../../context/bookListContext'

const Home = () => {
    const { openList, setOpenList } = useContext(bookContext)

    return (
        <main className={`mt-10 w-4/5 my-0 mx-auto ${openList && 'blur'} realtive`}>
            <div className={openList ? 'w-screen h-screen absolute' : 'none'} onClick={() => setOpenList(false)}></div>
            <BooksFilters />
            <BooksContainer />
        </main >
    )
}

export default Home