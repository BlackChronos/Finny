import {useEffect, useState} from "react";
import SideBar from "../Components/SideBar";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../Components/Card";
import "./CardsPage.css";

export function CardsPage({isMobile, token}) {

    const [userData, setUserData] = useState([]);
    const [tag, setTag] = useState(-1);
    const [offset, setOffset] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function handleRequests() {
            await fetchMoreData();
            setCount(await requestPostsCount(tag));
        }

        handleRequests().then();
    }, [tag]);


    async function fetchMoreData() {
        console.log('info asked')
        let arr = userData;

        let newArr = await requestPosts(10, offset, tag)
        newArr.map(data => {
            arr.push(data);
        })
        setOffset(offset + 1);

        console.log(arr);
        setUserData(arr);
    }

    async function requestPosts(limit, offset, tag) {
        console.log(limit, offset, tag);
        let request = "limit=" + limit + "&offset=" + offset;
        if (tag === -1)
            return fetch("http://localhost:8080/posts?" + request)
                .then(response => response.json())
        else {
            request += "&tag=" + tag;
            return fetch("http://localhost:8080/posts/tags?" + request)
                .then(response => response.json())
        }
    }

    async function requestPostsCount(tag) {
        if (tag === -1)
            return fetch("http://localhost:8080/posts/count")
                .then(value => value.json())
        else
            return fetch("http://localhost:8080/posts/tags/count?tag=" + tag)
                .then(value => value.json())
    }

    return (
        <div className={isMobile ? "cards-layout-mobile" : "cards-layout"}>
            <SideBar isMobile={isMobile} setTag={setTag} setOffset={setOffset}
                     setCount={setCount} setUserData={setUserData} token={token}/>

            <InfiniteScroll
                dataLength={userData.length}
                next={fetchMoreData}
                hasMore={userData.length < count}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{textAlign: 'center'}}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {userData.map((data) => <Card isMobile={isMobile} card_content={data}/>)}
            </InfiniteScroll>
        </div>
    );
}

export default CardsPage;