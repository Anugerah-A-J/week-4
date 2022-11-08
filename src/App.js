import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import './App.css'
import FormPage from './page/FormPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/form' element={<FormPage />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App