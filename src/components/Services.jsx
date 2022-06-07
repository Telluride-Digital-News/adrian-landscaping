import { FaArchive } from 'react-icons/fa'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Test from '../files/images/img2.jpeg'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const listServices = [
  { title: 'CARD 1', bg: Test },
  { title: 'CARD 2', bg: Test },
  { title: 'CARD 3', bg: Test },
  { title: 'CARD 4', bg: Test },
  { title: 'CARD 5', bg: Test },
  { title: 'CARD 6', bg: Test },
  { title: 'CARD 7', bg: Test },
  { title: 'CARD 8', bg: Test },
  { title: 'CARD 9', bg: Test },
  { title: 'CARD 10', bg: Test },
  { title: 'CARD 11', bg: Test },
  { title: 'CARD 12', bg: Test },
  { title: 'CARD 13', bg: Test },
  { title: 'CARD 14', bg: Test },
  { title: 'CARD 15', bg: Test },
  { title: 'CARD 16', bg: Test }
]

const CardWithIcon = ({ icon = <FaArchive className='text-white' />, title, bg }) => {
  return (
    <>
      <div className='card-services'>
        <div className='card-services__image justify-items-center' style={{ backgroundImage: `url(${bg})` }} />
        <div className='card-services__content dark:bg-slate-900/50'>
          <span className='card-services__archive inline-flex items-center justify-center p-2 bg-amber-500 rounded-md shadow-lg'>
            {icon}
          </span>
          <h3 className='card-services__content-text text-slate-700/70  dark:text-white mt-5 text-base font-medium tracking-tight'>{title}</h3>
        </div>
      </div>
    </>
  )
}

const Services = () => (
  <section id='services' className='services mx-auto px-4 sm:px-6 md:px-8 pt-6 pb-6 bg-neutral-100 dark:bg-slate-800'>
    <h1 className='pt-5 pb-8 text-center text-dark dark:text-white text-2xl font-medium uppercase md:text-3xl'><span className='text-slate-700/70 dark:text-slate-300'>Services</span></h1>
    <div className='contain-services grid grid-cols-1 gap-8 mx-auto'>
      <Carousel autoPlay='true' infinite='true' responsive={responsive} className='custom-carrousel' removeArrowOnDeviceType={['tablet', 'mobile']}>
        {listServices.map((element, index) => {
          return (
            <div key={index} className='mx-4'>
              <CardWithIcon key={index} title={element.title} bg={element.bg} />
            </div>
          )
        })}
      </Carousel>
    </div>
    <div className='services__sub-services'>
      <h1>THIS IS A TEST</h1>
    </div>
  </section>
)

export default Services
