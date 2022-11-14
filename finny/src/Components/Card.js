import React from 'react';
import {Link} from "react-router-dom";
import Moment from "moment";

import './Card.css'

function Card({isMobile, card_content}) {

    const id = card_content.id;
    const image_src = card_content.photoLink;
    const title = card_content.title;
    const description = card_content.description;
    const author_name = card_content.author.firstName
            + ' ' + card_content.author.lastName;
    const pfp_src = card_content.author.photoLink;
    const tags = card_content.tags;
    let date = card_content.date;

    let author_link = '/';


    date = Moment(date).format("MMM DD, yyyy HH:mm");

    return (
        <div className={isMobile? 'card-container mobile-version' : 'card-container'}>
            <Link to={"posts/" + id} className='card-header'>
                <img src={image_src} alt=''
                     className={isMobile ? 'card-image mobile-version' : 'card-image'}/>
            </Link>
            <div className="card-body-container">
                <div className="card-body">
                    <div className='tag-list'>
                        {tags.map(value => {
                            value = value.content;
                            return (<i className='tag'>#{value}</i>)
                        })}
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