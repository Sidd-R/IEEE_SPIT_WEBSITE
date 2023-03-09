import React from "react";
import "../styles/BlogCard.css"

export default function BlogCard(props) {

    return (
        <div className="BlogCardContainer w-72 h-auto mt-10 mx-4">
            <div className="card" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <div>
                    <a href={props.link} target="_blank"><img src={props.img} className="card_image w-72 h-52 object-cover" /></a>
                </div>
                <div className="card__copy">
                    <h1>{props.title}</h1>
                    <h2 className="date">{props.date}</h2>
                    <p>
                        {props.content.substring(0, 180)}...<a href={props.link} target="_blank">Read more</a>
                    </p>
                </div>
            </div>
        </div>

    )
}
