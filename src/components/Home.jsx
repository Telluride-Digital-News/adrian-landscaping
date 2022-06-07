import React from 'react'
import bg from '../files/images/img2.jpeg'

const Home = () => {
  return (
    <>
      <header id='home'>
        <div className='bg-image w-full bg-cover bg-center backdrop-blur-sm bg-gray/30' style={{ backgroundImage: `url(${bg})` }}>
          <div className='flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-40 dark:bg-opacity-60'> </div>
        </div>
      </header>
      <div className='text-center p-10 grid justify-center bg-neutral-100 dark:bg-slate-900/50'>
        <p className='text-2xl uppercase'>Lanscaping Services</p>
        <p className='text-md font-light capitalize text-slate-600 dark:text-slate-400'>PARKS AND RESIDENCE CLEANING</p>
      </div>
    </>
  )
}

export default Home
