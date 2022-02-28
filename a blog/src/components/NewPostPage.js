import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from './Home';


export function NewPostPage(props) {
    return (
        <>
            <div className="home">
                <div className="main-container">
                    <div className='navigation'>
                        <Link to={"/"}>Back</Link>
                    </div>
                    <div className='new-post-title'></div>
                    <div className='new-post-date'></div>
                    <div className='new-post-content'></div>

                </div>
            </div>
        </>
    )
}