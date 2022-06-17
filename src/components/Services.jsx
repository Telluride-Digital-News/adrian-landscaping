import { FaArchive } from 'react-icons/fa'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import TreeRemoval from '../files/images/tree-removal.png'
import Lanscaper from '../files/images/landscaper.jpeg'
import ConcreteMansory from '../files/images/concrete-mansory.jpeg'
import Decoration from '../files/images/decoration.jpeg'
import GardenDesign from '../files/images/garden-design.jpeg'
import LawnCare from '../files/images/lawn-care.jpeg'
import LawnLandscaping from '../files/images/lawn-landscaping.jpeg'
import StoneLandscaping from '../files/images/stone-landscaping.jpeg'
import StoneMansory from '../files/images/stone-mansory.jpeg'
import TreeLandscaping from '../files/images/tree-landscaping.jpeg'
import Irritating from '../files/images/irritating.webp'
import Snow from '../files/images/snow.jpeg'
import Treeplanting from '../files/images/tree-planting.webp'
import FlowerBeds from '../files/images/flowerbeds.jpeg'
import Spring from '../files/images/spring-clean-up.jpeg'
import FlagStone from '../files/images/flag-stone.jpeg'
import FallClean from '../files/images/fall-clean.jpeg'
import HangingBaskets from '../files/images/hanging-baskets.jpeg'

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
  { title: 'Landscaper', bg: Lanscaper },
  { title: 'Concrete Masonry', bg: ConcreteMansory },
  { title: 'Garden Decorating', bg: Decoration },
  { title: 'Garden Design', bg: GardenDesign },
  { title: 'Lawn Care', bg: LawnCare },
  { title: 'Lawn Lanscaping', bg: LawnLandscaping },
  { title: 'Stone Landscaping', bg: StoneLandscaping },
  { title: 'Stone Masonry', bg: StoneMansory },
  { title: 'Tree Landscaping', bg: TreeLandscaping },
  { title: 'Irritating', bg: Irritating },
  { title: 'Snow Removal', bg: Snow },
  { title: 'Tree Planting', bg: Treeplanting },
  { title: 'Tree Removal', bg: TreeRemoval },
  { title: 'Flowerbeds', bg: FlowerBeds },
  { title: 'Flagstone', bg: FlagStone },
  { title: 'Spring Clean up', bg: Spring },
  { title: 'Fall Clean Up', bg: FallClean },
  { title: 'Hanging Baskets', bg: HangingBaskets }
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
    {/* <div className='services__sub-services'>
      <h1>THIS IS A TEST</h1>
    </div> */}
  </section>
)

export default Services
