import {useEffect, useState} from "react";
import SideBar from "../Components/SideBar";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../Components/Card";
import dateFormat from "dateformat";
import "./CardsPage.css";

export function CardsPage({isMobile}) {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(getCardInfo());
        }

        setUserData(arr)
    }, []);


    function fetchMoreData() {
        console.log('info asked')

        let arr = userData;
        for (let i = 0; i < 10; i++) {
            arr.push(getCardInfo());
        }
        setUserData(arr)
    }

    return (
        <div className={isMobile ? "cards-layout-mobile" : "cards-layout"}>
            <SideBar isMobile={isMobile}/>

            <InfiniteScroll
                dataLength={userData.length}

                //TODO: Get InfiniteScroll(next) to work or rewrite it
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{textAlign: 'center'}}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {userData.map((data) => <Card link='/' card_content={data}/>)}
            </InfiniteScroll>
        </div>
    );
}


//TODO: This will be request to DB
function getCardInfo() {
    console.log('info provided')
    return {
        id: Math.round(Math.random() * 0xFFFFFFFF),
        image_src: 'images/default_card.jpg',
        title: 'Lost a Dog!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'A, aspernatur debitis dicta dolor dolorem doloremque eos eveniet expedita' +
            ' explicabo fugit hic inventore magni maiores, modi quas quia recusandae' +
            ' sapiente sequi temporibus totam? Culpa, ipsum, optio. Cupiditate modi' +
            ' numquam perferendis quasi sunt unde voluptate? Ea expedita, illo natus' +
            ' numquam perferendis voluptas? Lorem ipsum dolor sit amet, consectetur' +
            ' adipisicing elit. A, aspernatur debitis dicta dolor dolorem doloremque' +
            ' eos eveniet expedita explicabo fugit hic inventore magni maiores, modi' +
            ' quas quia recusandae sapiente sequi temporibus totam? Culpa, ipsum, optio.' +
            ' Cupiditate modi numquam perferendis quasi sunt unde voluptate? Ea expedita,' +
            ' illo natus numquam perferendis voluptas?',

        author: {
            name: 'Default Author Name',
            pfp_src: 'images/default_pfp.jpg'
        },
        tags: '#dog #lost #brown #toy_terier',
        date: dateFormat(new Date(), "mm/dd/yyyy")
    }
}

export default CardsPage;