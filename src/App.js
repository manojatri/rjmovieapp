import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import Error from './pages/Error'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<MovieDetail />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  )
}

export default App