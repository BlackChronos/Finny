import React from 'react';
import {useParams} from "react-router-dom";

function PostPage() {
    const params = useParams();
    const postID = params.postID

    return (
        <>

            <h2>This Post's Id is 👉️ {postID}</h2>

        </>
    );
}

export default PostPage;