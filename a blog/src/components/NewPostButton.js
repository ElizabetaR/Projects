import React from "react";
import "../styles/NewPost.css";
import { Link } from "react-router-dom";

export function NewPostButton() {
    return (
        <>
            <div className="add-post"></div>

            <button className="new-post-button">+</button>


        </>
    );
}
