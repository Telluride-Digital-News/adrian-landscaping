import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Services from './components/Services'
import PhotoGallery from './components/Gallery'
import Contact from './components/Contact'
import '../src/stylesheets/main.scss'

function App () {
  return (
    <div className='h-screen justify-between antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800'>
      <Navbar />
      <Home />
      <Services />
      <PhotoGallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
