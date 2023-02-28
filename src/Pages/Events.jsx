import React, { useState } from "react";
import '../styles/Events.css'
import { events } from "../components/Event_description";

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
    <div className="carousel">
      {events.map((event, index) => (
        <div
          key={index}
          className={currentIndex === index ? "active" : ""}
          style={{ backgroundImage: `url(${event.image})`, margin: "0" }}
        >
          <section className="event_content">
            <h2>
              {event.name}
            </h2>
            <p className="content">
              {event.desc}
            </p>
          </section>
        </div>
      ))}
      <button className="prev-btn" onClick={handlePrevClick}>
        &#8249;
      </button>
      <button className="next-btn" onClick={handleNextClick}>
        &#8250;
      </button>
    </div>
  );
}

export default Events;