//import css
import './index.css'

//import libary
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'

//import { Component } 


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>




)
