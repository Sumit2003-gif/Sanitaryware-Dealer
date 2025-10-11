import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import ScrollToTop from './Components/ScrollToTop'
import Footer from './Pages/Footer'
import SinglePerNews from './Components/SinglePerNews'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/news' element={<Blog/>}/>
        <Route path='/news/:id' element={<SinglePerNews/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
