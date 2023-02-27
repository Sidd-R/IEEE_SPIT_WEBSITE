import React from "react";
import "../styles/BlogCard.css"

export default function BlogCard(props) {
    return (
        <div className="card">
            <div >
                <img src={props.img} className="card_image" />
            </div>
            <div className="card__copy">
                <h1>{props.title}</h1>
                <h2>{props.date}</h2>
                <p>
                    {props.content}
                </p>
            </div>
        </div>
    )
}
