import React from 'react'
import '../styles/TeamCard.css'

const TeamCard = (props) => {
    return (
        <div className='card_container sm:pt-20 sm:px-10 p-6'>
            <div className='card_team w-64 sm:w-96' data-aos="flip-down">
                <div className='img_container_team'>
                    {/* <center> */}
                        <img src={props.image} className='team_image w-64 h-60 sm:w-96 sm:h-80  ' alt='member' />
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