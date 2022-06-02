import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import '../src/stylesheets/main.scss'

function App () {
  return (
    <div className='h-screen justify-between antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
