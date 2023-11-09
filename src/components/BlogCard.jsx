import React from 'react';
import '../styles/BlogCard.css';

export default function BlogCard(props) {
  return (
    <div className="BlogCardContainer  h-auto mt-10 mx-4" key={props.link}>
      <div className="card">
        <div>
          <a href={props.link} target="_blank" rel="noreferrer">
            <img
              src={props.img}
              className="card_image w-full h-52 object-cover"
              alt="blog pic"
            />
          </a>
        </div>
        <div className="card__copy">
          <h1>{props.title}</h1>
          <h2 className="date">{props.date}</h2>
        </div>
      </div>
    </div>
  );
}
