import React from 'react'
import '../styles/eventcard.css'

export default function EventCard({name,desc,image}) {
  return (
    <div className='p-6 pb-0'>
  <figure class="snip1218  w-72">
    <div class="image h-48 overflow-hidden max-w-xs  "><img src={image} alt="sample80" className='h-48 w-full max-w-xl object-cover'/>
      <p>
        {desc}
      </p>
    </div>
    <figcaption className='flex justify-center items-center py-4 '>
      <h3 className='text-clip'> {name}</h3>
    </figcaption>
  </figure>
  </div>
  )
}


