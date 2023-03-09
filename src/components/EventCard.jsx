import React from 'react'
import '../styles/eventcard.css'

export default function EventCard({name,desc,image}) {
  return (
    <div className='p-6 pb-0'>
  <figure class="snip1218 w-72  ">
    <div class="image w-72 h-48 overflow-hidden  "><img src={image} alt="sample80" className='w-72 h-48 object-cover'/>
      <p>
        {desc}
      </p>
    </div>
    <figcaption>
      <h3><span> {name}</span></h3>
    </figcaption>
  </figure>
  </div>
  )
}


