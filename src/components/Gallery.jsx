import React, { useState } from 'react'
import photos from './Photos-Basic-Service'
import CloseIcon from '@mui/icons-material/Close'

const PhotoGallery = () => {
  const [model, setModel] = useState(false)
  const [tempimgSrc, setTempImgSrc] = useState('')

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc)
    setModel(true)
  }

  return (
    <>
      <div className={model ? 'model open' : 'model'}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className='photo-gallery-container bg-neutral-100 dark:bg-slate-800'>
        <h1 id='gallery' className='pt-5 pb-8 text-center text-dark dark:text-white text-2xl font-medium uppercase md:text-3xl'><span className='text-slate-700/70 dark:text-slate-300'>Our Projects</span></h1>
        <section id='PhotoGallery' className='photo-gallery bg-neutral-100 dark:bg-slate-800'>
          {photos.map((item, index) => {
            return (
              <div className='photo-gallery__picture' onClick={() => getImg(item.imgSrc)} key={index}>
                <img src={item.imgSrc} />
              </div>
            )
          })}
        </section>
      </div>
    </>
  )
}

export default PhotoGallery
