import React from "react";
import "../styles/Home.css";



export function Home(props) {
    return (


        <div className="home">

            <div className="main-container">
                <div className="post">
                    <div className="post-image"></div>
                    <div className="post-content">
                        <div className="post-date">Jan 25</div>
                        <div className="post-title">
                            <h4>This is my title</h4>
                        </div>
                        <div className="post-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Praesent viverra ligula eros, sit amet
                            fringilla dui laoreet vel. Aenean non diam
                            pellentesque, vulputate felis eget, cursus metus.
                            Donec ut tellus eu lorem fermentum convallis vel id
                            ex. Nullam dignissim dolor quis massa sodales
                            pellentesque. Nunc tincidunt efficitur orci.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
