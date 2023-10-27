import React from 'react'

const CardAContent = [
  {
    title: 'Vision',
    content: 'IEEE – SPIT will be essential to the student technical community and to technical professionals everywhere, and be recognized for the contributions of technology and of technical professionals in improving global conditions.',
    dur:"700"
  },
  {
    title: 'What we do?',
    content: 'IEEE – SPIT gives you a platform to present and identify yourselves as an important element of the organisation and have access to information in various fields of technology .Student members get ample of opportunities to work on these skillsets.',
    dur:"1300"
  },
  {
    title: 'About Us',
    content: 'IEEE-SPIT is a student branch of the Institute of Electrical and Electronic Engineers Bombay Section. It is one of the student organizations which organize the annual intercollegiate technical events. It throws light on capabilities of the students.',
    dur:"1000"
  }
]

const cardBContent = [
  {
    title: "IEEE - Society",
    content: "IEEE has technical Societies that provide benefits to members within specialized fields of interest. Society memberships enable you to stay current within your chosen technology profession, keep in touch with your peers, and invest in your career.",
    link: "https://www.ieee.org/communities/societies/index.html",
    effect: "fade-right"
  },
  {
    title: "IEEE Membership",
    content: "IEEE membership offers access to technical innovation, cutting-edge information, networking opportunities, and exclusive member benefits. Members support IEEE’s mission to advance technology for humanity and the profession, while memberships build a platform to introduce careers in technology to students around the world.",
    link: "https://www.ieee.org/membership/index.html",
    effect: "fade-left"
  }
]

function AboutIEEE() {

  const CardA = ({title,content,dur}) => {
    return (
    <div className='text-white p-4 rounded-sm'  style={{backgroundColor:"rgba(255,255,255,0.3)"}} 
    // data-aos="zoom-in" data-aos-duration={dur}
    >
        <div className='text-3xl mb-3 italic' style={{color:"rgba(255,255,255,0.7)"}}>{title}</div>
        <div className=''>{content}</div>
      </div>
  )}


  const CardB = ({title, content,effect,link}) => {
    return (
      <div className='text-white p-4 rounded-sm ' style={{backgroundColor:"#05598D90"}} 
      // data-aos={effect} data-aos-duration="1000"
      >
        <div className='text-3xl mb-3 italic'>{title}</div>
        <div>{content}</div>
        <div className=' underline underline-offset-4 font-semibold mt-2'><a href={link}>Read more</a></div>
      </div>
    )
  }

  return (
    <div>
      <div className='flex sm:px-28 sm:space-x-10 flex-wrap sm:flex-nowrap px-8 space-y-5 sm:space-y-0'>
        {CardAContent.map((e,i) => {
          return <CardA title={e.title} content={e.content} key={i} dur={e.dur}/>
        })}
      </div>
      <div className='flex sm:px-28 sm:space-x-10 flex-wrap sm:flex-nowrap px-8 space-y-5 sm:space-y-0 mt-7 sm:mt-10'>
        {cardBContent.map((e,i) => {
          return <CardB title={e.title} content={e.content} key={i} effect={e.effect} link={e.link}/>
        })}
      </div>
      <div className=' sm:px-28  px-8  sm:space-y-0 sm:mt-10 mt-7'>
        <div className='text-white p-4 rounded-sm'  style={{backgroundColor:"rgba(255,255,255,0.3)"}} 
        // data-aos="zoom-in" data-aos-duration="1000"
        >
          <div className='text-2xl mb-3 italic sm:text-xl sm:pl-10' style={{color:"rgba(255,255,255)"}}>
            IEEE Student Chapters in SPIT
          </div>
          <div className='flex sm:flex-shrink flex-wrap justify-evenly mt-5 space-y-4'>
            <div className=''>
              <a href='http://ieee-aess.spit.ac.in'>
              <img src={require('../images/ieeeaess.jpeg')} alt='IEEE AESS SPIT Logo' className='sm:h-40 sm:w-40 h-60 w-60 '/>
              <div className='text-xl text-center mt-1'>IEEE AESS</div>
              </a>
            </div>
            <div className=''>
              <img src={require('../images/ieeecs.jpeg')} alt='IEEE CS SPIT Logo' className='sm:h-40 sm:w-40 h-60 w-60'/>
              <div className='text-xl text-center mt-1'>IEEE CS</div>
            </div>
            <div className=''>
              <a href='https://wie.spit.ac.in/'>
              <img src={require('../images/wie-logo.png')} alt='IEEE WIE SPIT Logo' className='sm:h-40 sm:w-40 h-60 w-60'/>
              <div className='text-xl text-center mt-1'>IEEE WIE</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutIEEE