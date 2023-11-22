import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BooksContextProvider } from "./context/bookListContext"


ReactDOM.createRoot(document.getElementById('root')).render(
  <BooksContextProvider>
    <App />
  </BooksContextProvider>
)
