import React from 'react';
import {useParams} from "react-router-dom";

function PostPage() {
    const params = useParams();
    const postID = params.postID

    return (
        <>

            <h3>
                {postID}
            </h3>

        </>
    );
}

export default PostPage;