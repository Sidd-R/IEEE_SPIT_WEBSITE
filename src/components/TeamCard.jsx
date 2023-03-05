import React from 'react'
import '../styles/TeamCard.css'

const TeamCard = (props) => {
  return (
    <div className='card_container'>
        <div className='card_team'>
            <div>
                <center>
                    <img src={props.image} className='team_image' alt='member' />
                </center>
            </div>
            <div className='team_info'>
                <div>
                    {props.name}
                </div>
                <div style={{ fontSize: '20px', paddingBottom: '10px'}}>
                    {props.post}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamCard