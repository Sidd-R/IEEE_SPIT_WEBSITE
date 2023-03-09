import React, { useState } from "react";
import '../styles/Events.css'
import { events } from "../components/Event_description";
import EventCard from "../components/EventCard";
import Our from "../components/Our";

function Events() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
    <Our x={"Events"}/>
    <div className="flex sm:py-10 align-middle justify-center flex-wrap mb-6">
      {events.map(e => {
        return <EventCard name={e.name} desc={e.desc} image={e.image}/>
      })}
    </div>
    </>
  );
}

export default Events;