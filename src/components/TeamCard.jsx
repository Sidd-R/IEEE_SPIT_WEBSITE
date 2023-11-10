import React from 'react';
import '../styles/TeamCard.css';
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TeamCard = (props) => {
  return (
    <div className="card_container sm:pt-12 p-6 sm:pb-5 sm:px-10 " key={props.name  }>
      <div className="card_team w-64 ">
        <div className="img_container_team hover:opacity-90 relative ">
          <div className="absolute hover:opacity-100 opacity-0 h-full z-20 w-full flex items-center justify-center ">
            {props.linkedin && (
              <a className="text-white" href={props.linkedin}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            )}
            {props.linkedin && props.instagram && (
              <div className="h-10 w-0.5 bg-white mx-5"></div>
            )}
            {props.instagram && (
              <a className="text-white" href={props.instagram}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            )}
          </div>
          <div className="relative w-64 h-80 inner_shadow z-10 bg-transparent">
            <img
              src={props.image}
              className="team_image w-64 h-80 -z-10 absolute top-0 bottom-0 left-0 right-0"
              alt="member"
            />
            <div className=" absolute inner_shadow  bottom-0 w-full top-0 flex flex-col justify-end pb-3">
              <div className=" text-2xl text-gray-200">{props.name}</div>
              <div
                style={{ fontSize: '20px', paddingBottom: '10px' }}
                className="text-gray-200   "
              >
                {props.post}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
