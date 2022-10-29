import React from 'react';
import {Link} from "react-router-dom";

import './Card.css'

function Card({link, card_content}) {

    const id = card_content.id;
    const image_src = card_content.image_src;
    const title = card_content.title;
    const description = card_content.description;
    const author_name = card_content.author.name;
    const pfp_src = card_content.author.pfp_src;
    const tags = card_content.tags;

    const tagList = tags.split(' ');


    //TODO: Add mobile variant

    return (
        <div className='card-container'>
            <Link to={link} className='card-header'>
                <img src={image_src} alt='' className='card-image'/>
            </Link>
            <div className="card-body">
                <div className='tag-list'>
                    {tagList.map(value => <i className='tag'>{value}</i>)}
                </div>
                <h4 className='card-title'>{title} {id}</h4>
                <p className='card-description'>{description}</p>
            </div>
            <div className="author">
                <img src={pfp_src} alt='Author' className='author-pfp'/>
                <i className='card-author'>{author_name}</i>
            </div>
        </div>
    );
}

export default Card;


//<div class="card">
//     <div class="card-header">
//       <img src="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg" alt="ballons" />
//     </div>
//     <div class="card-body">
//       <span class="tag tag-purple">Popular</span>
//       <h4>
//         How to Keep Going When You Don’t Know What’s Next
//       </h4>
//       <p>
//         The future can be scary, but there are ways to
//         deal with that fear.
//       </p>
//       <div class="user">
//         <img src="https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo" alt="user" />
//         <div class="user-info">
//           <h5>Eyup Ucmaz</h5>
//           <small>Yesterday</small>
//         </div>
//       </div>
//     </div>
//   </div>