// import React, { useState } from "react";
import '../styles/Events.css';
import { events22, events23 } from '../components/Event_description';
import EventCard from '../components/EventCard';
import Our from '../components/Our';

function Events() {
  return (
    <>
      <Our x={'Events'} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   md:px-28 px-8 mt-10 mx-auto place-items-center">
        {events23.map((e, i) => {
          return <EventCard name={e.name} desc={e.desc} image={e.image} key={i} />;
        })}
      </div>
      <div className=" font-sans text-3xl font-normal mx-8 mb-1 sm:mx-28 mt-6 text-gray-100">
        Previous Events
      </div>

      <hr className=" bg-black h-0.5   mx-5 sm:mx-24 " />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   md:px-28 px-8 mt-10 mx-auto place-items-center">
        {events22.map((e, i) => {
          return <EventCard name={e.name} desc={e.desc} image={e.image} key={i} />;
        })}
      </div>
    </>
  );
}

export default Events;