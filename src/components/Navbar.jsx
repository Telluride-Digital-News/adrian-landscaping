import { useState } from 'react'
import { Link } from 'react-scroll'
import ButtonTheme from './ButtonTheme'
import { FaBuffer } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const LinkForComputer = ({ text, path }) => (
    <Link to={path} spy smooth className='py-4 px-6 hover:border-b-2 hover:border-b-orange-400 text-gray-500 dark:text-gray-400 font-semibold hover:text-orange-900 dark:hover:text-orange-400 transition duration-300'>{text}</Link>
  )

  const LinkForMobile = ({ text, path }) => (
    <Link to={path} spy smooth className='block text-sm px-2 py-4 hover:bg-orange-700 hover:text-white transition duration-300'>{text}</Link>
  )

  return (
    <nav className='navbar-container bg-white dark:bg-slate-900/50 shadow-lg'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-between'>
          <div>
            <Link to='home' className='flex items-center py-4 px-2'>
              <FaBuffer className='h-8 w-8 mr-2' />
              <span className='font-semibold text-black-900 dark:text-white text-lg'>Adrian Lanscaping</span>
            </Link>
          </div>
          <div className='hidden md:flex items-center space-x-1'>
            <LinkForComputer text='Home' path='home' />
            <LinkForComputer text='Services' path='services' />
            <LinkForComputer text='Gallery' path='gallery' />
            <LinkForComputer text='Contact' path='contact' />
          </div>
          <div className='hidden md:flex items-center space-x-3 '>
            <ButtonTheme />
          </div>
          <div onClick={() => setIsOpen(!isOpen)} className='md:hidden flex items-center'>
            <button className='outline-none mobile-menu-button'>
              <svg
                className=' w-6 h-6 text-gray-500 hover:text-orange-500 dark:text-white'
                x-show='!showMenu'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M4 6h16M4 12h16M4 18h16'> </path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='mobile-menu'>
          <ul>
            <LinkForMobile text='Home' path='home' />
            <LinkForMobile text='Services' path='services' />
            <LinkForMobile text='Gallery' path='gallery' />
            <LinkForMobile text='Contact' path='contact' />
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
