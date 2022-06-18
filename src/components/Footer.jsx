import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className='p-4 bg-white shadow m-0 md:px-6 md:py-8 dark:bg-gray-800'>
      <div className='sm:flex text-center sm:items-center sm:justify-between'>
        <Link to='/' className='flex items-center mb-4 sm:mb-0'>
          <img src='https://telluridedigitalnews.com/assets/files/img/logo.png' className='mr-4 h-8' alt='TDN' />
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>Telluride</span>
        </Link>
        <ul className='flex flex-wrap items-center mb-6 sm:mb-0'>
          <li>
            <a href='/' className='mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400'>About</a>
          </li>
          <li>
            <a href='/' className='mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400'>Privacy Policy</a>
          </li>
          <li>
            <a href='/' className='mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400'>Licensing</a>
          </li>
          <li>
            <Link to='/contact' className='text-sm text-gray-500 hover:underline dark:text-gray-400'>Contact</Link>
          </li>
        </ul>
      </div>
      <hr className='my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
      <div className='sm:flex sm:justify-content-center sm:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>© 2022 <a href='https://telluridedigitalnews.com' className='hover:underline'>Telluride Digital News™</a>. All Rights Reserved.
        </span>
        <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
          <a href='https://www.facebook.com/adrianslandscapingco' className='w-10 text-gray-500 hover:text-gray-900 dark:hover:text-white'>
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'><path fillRule='evenodd' d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' clipRule='evenodd' /></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
