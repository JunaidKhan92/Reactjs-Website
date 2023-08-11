import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Layouts/Navbar';
import Footer from './Components/Layouts/Footer';
import Todo from './Components/todolist/todo';
import Home from './Pages/Home';

const App = () => {
  return <>
    <Navbar />
    <Routes>
       <Route index element={<Home/>} />
      <Route path='/Todo' element={<Todo />} />
      <Route path='*' element={<>404 page not found</>} />
    </Routes>
    <Footer />
  </>
}

export default App