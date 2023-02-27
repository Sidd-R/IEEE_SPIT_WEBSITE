import React from "react";
import "../styles/BlogCard.css"

export default function BlogCard(props) {

    return (
        <div className="BlogCardContainer">
            <div className="card">
                <div>
                    <a href={props.link} target="_blank"><img src={props.img} className="card_image" /></a>
                </div>
                <div className="card__copy">
                    <h1>{props.title}</h1>
                    <h2 className="date">{props.date}</h2>
                    <p>
                        {props.content}
                    </p>
                </div>
            </div>
        </div>

    )
}
