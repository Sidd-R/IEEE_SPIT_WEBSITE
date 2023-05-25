import React from 'react'

const CardAContent = [
  {
    title: 'Vision',
    content: 'IEEE – SPIT will be essential to the student technical community and to technical professionals everywhere, and be recognized for the contributions of technology and of technical professionals in improving global conditions.'
  },
  {
    title: 'What we do?',
    content: 'IEEE – SPIT gives you a platform to present and identify yourselves as an important element of the organisation and have access to information in various fields of technology .Student members get ample of opportunities to work on these skillsets.'
  },
  {
    title: 'About Us',
    content: 'IEEE-SPIT is a student branch of the Institute of Electrical and Electronic Engineers Bombay Section. It is one of the student organizations which organize the annual intercollegiate technical events. It throws light on capabilities of the students.'
  }
]

function AboutIEEE() {
  const titleStyle = '';
  const contentStyle = 'text-white';
  const containerStyle = ''

  const CardA = ({title,content}) => {return (
    <div className='text-white p-4 rounded-sm' style={{backgroundColor:"rgba(255,255,255,0.3)"}}>
        <div className='text-3xl mb-3 italic' style={{color:"rgba(255,255,255,0.7)"}}>{title}</div>
        <div className=''>{content}</div>
      </div>
  )}
  
  return (
    <div>
      <div className='flex sm:px-28 sm:space-x-14 flex-wrap sm:flex-nowrap px-8 space-y-5 sm:space-y-0'>
      {CardAContent.map((e) => {
        return <CardA title={e.title} content={e.content}/>
      })}
      </div>
    </div>
  )
}

export default AboutIEEE