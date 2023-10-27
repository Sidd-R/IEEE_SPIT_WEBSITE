import React from 'react'
import '../styles/TeamCard.css'

const TeamCard = (props) => {
    return (
        <div className='card_container sm:pt-20 sm:px-10 p-6'>
            <div className='card_team w-64 bg-gray-500' >
                <div className='img_container_team hover:opacity-50 relative'>
                    {/* <center> */}
                    <div className='absolute hover:opacity-100 opacity-0 h-full w-full flex items-center justify-center flex-col'>
                        <div>Linkedin</div>
                        <div>Instagram</div>
                    </div>
                        <img src={props.image} className='team_image w-64 h-72  ' alt='member' />
                    {/* </center> */}
                </div>
                <div className='team_info'>
                    <div className=' text-2xl'>
                        {props.name}
                    </div>
                    <div style={{ fontSize: '20px', paddingBottom: '10px' }} className='text-gray-200   '>
                        {props.post}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard