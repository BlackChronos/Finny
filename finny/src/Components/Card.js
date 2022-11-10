import React from 'react';
import {Link} from "react-router-dom";

import './Card.css'

function Card({isMobile, card_content}) {

    const id = card_content.id;
    const image_src = card_content.image_src;
    const title = card_content.title;
    const description = card_content.description;
    const author_name = card_content.author.name;
    const pfp_src = card_content.author.pfp_src;
    const tags = card_content.tags;
    const date = card_content.date;

    let author_link = '/';

    const tagList = tags.split(' ');

    //TODO: Add mobile variant

    return (
        <div className={isMobile? 'card-container mobile-version' : 'card-container'}>
            <Link to={"posts/" + id} className='card-header'>
                <img src={image_src} alt=''
                     className={isMobile ? 'card-image mobile-version' : 'card-image'}/>
            </Link>
            <div className="card-body-container">
                <div className="card-body">
                    <div className='tag-list'>
                        {tagList.map(value => <i className='tag'>#{value}</i>)}
                    </div>
                    <h4 className='card-title'>{title} {id}</h4>
                    <p className='card-description cut-text'>{description}</p>
                </div>
                <Link to={author_link} className="author">
                    <img src={pfp_src} alt='Author' className='author-pfp'/>
                    <i className='card-author'>{author_name}</i>
                    <span className='card-date'>{date}</span>
                </Link>
            </div>
        </div>
    );
}

export default Card;