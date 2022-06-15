import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

const SERVICE_ID = 'service_7l4rhb5'
const TEMPLATE_ID = 'template_w0yo0vw'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, '9d1ekEibB-me0H7Vg')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }
  return (
    <div id='contact' className='bg-neutral-100 dark:bg-slate-800'>
      <section className='container max-w-8xl mx-auto px-4 sm:px-6 md:px-8 pt-6 pb-6'>
        <div className='grid grid-cols-1 gap-12 text-center'>
          <div className='w-full'>
            <div className='bg-contact bg-gradient-to-b from-slate-800 to-slate-600 dark:to-slate-800 h-96'> </div>
            <div className='max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12'>
              <div className='bg-white dark:bg-slate-700/80 w-full shadow-xl dark:shadow-slate-700/50 dark:shadow-xl rounded p-8 sm:p-12 -mt-72'>
                <p className='text-3xl font-bold leading-7 text-center'>Contact me</p>
                <form ref={form} onSubmit={sendEmail}>
                  <div className='md:flex items-center mt-12'>
                    <div className='w-full md:w-1/2 flex flex-col'>
                      <label className='font-semibold leading-none'>Name</label>
                      <input type='text' name='name' id='name' className='leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200' />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4'>
                      <label className='font-semibold leading-none'>Phone</label>
                      <input type='tel' id='phone' name='phone' className='leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200' />
                    </div>
                  </div>
                  <div className='md:flex items-center mt-8'>
                    <div className='w-full flex flex-col'>
                      <label className='font-semibold leading-none'>E-mail</label>
                      <input type='email' id='email' name='email' className='leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200' />
                    </div>
                  </div>
                  <div>
                    <div className='w-full flex flex-col mt-8'>
                      <label className='font-semibold leading-none'>Message</label>
                      <textarea type='text' name='message' id='message' className='h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200' />
                    </div>
                  </div>
                  <div className='flex items-center justify-center w-full'>
                    <button type='submit' className='mt-9 font-semibold leading-none text-white py-4 px-10 bg-slate-500 rounded hover:bg-slate-600 focus:ring-2 focus:ring-offset-2 focus:ring-slate-700 focus:outline-none'>
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className='relative rounded'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.715909333187!2d-107.81341998467764!3d37.93706677973021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873ed862a0d8cdb1%3A0x96e1d20abd7d815e!2s100%20W%20Colorado%20Ave%2C%20Telluride%2C%20CO%2081320%2C%20USA!5e0!3m2!1sen!2smx!4v1649955503428!5m2!1sen!2smx'
            title='Google Maps'
            className='w-full h-full'
            allowFullScreen=''
            loading='lazy'
          />
        </div>
      </section>
    </div>
  )
}

export default Contact
