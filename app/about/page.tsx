import db from '@/utils/db'
import React from 'react'

function AboutPage() {

  
  return (
   <section>
    <h1 className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl'>
      We love
      <span className='bg-primary py-2 px-4 rounded-lg tracking-widest text-white'>
        store
      </span>
    </h1>
    <p className='mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-center text-muted-foreground'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
      consequatur, incidunt quisquam doloremque magnam voluptate dicta
      deleniti voluptate dicta deleniti voluptate dicta deleniti voluptate
      dicta deleniti voluptate dicta deleniti voluptate dicta deleniti
      voluptate dicta deleniti voluptate dicta deleniti voluptate dicta
      deleniti voluptate dicta deleniti voluptate dicta deleniti voluptate
      dicta deleniti voluptate dicta deleniti voluptate dicta deleniti
      voluptate dicta deleniti voluptate dicta deleniti voluptate dicta
      deleniti.
    </p>
   </section>
  )
}

export default AboutPage