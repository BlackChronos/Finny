import {useEffect, useState} from "react";
import SideBar from "../Components/SideBar";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../Components/Card";
import "./CardsPage.css";

export function CardsPage({isMobile}) {

    const [userData, setUserData] = useState([]);
    const [offset, setOffset] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function handleRequests (){
            await fetchMoreData();
            setCount(await requestPostsCount());
        }
        handleRequests().then();
    }, []);


    async function fetchMoreData() {
        console.log('info asked')
        let arr = userData;

        let newArr = await requestPosts(10, offset)
        newArr.map(data => {
            arr.push(data);
        })
        setOffset(offset + 1);

        console.log(arr);
        setUserData(arr);
    }

    async function requestPosts(limit, offset) {
        console.log(limit, offset);
        let request = "limit=" + limit + "&offset=" + offset;
        return fetch("http://localhost:8080/posts?" + request)
            .then(response => response.json())
    }

    async function requestPostsCount() {
        return fetch("http://localhost:8080/posts/count")
            .then(value => value.json())
    }

    return (
        <div className={isMobile ? "cards-layout-mobile" : "cards-layout"}>
            <SideBar isMobile={isMobile}/>

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