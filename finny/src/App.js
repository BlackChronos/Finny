import Navbar from "./Components/Navbar";
import {
    BrowserRouter as Router,
    Routes, Route,
    Navigate,
} from "react-router-dom";
import './App.css'
import Card from "./Components/Card";
import Page_404 from "./Pages/Page404";
import {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";


function App() {

    return (
        <>
            <div>
                <Router>
                    <Navbar className='nav'/>

                    <div className='app-container'>
                        <Routes>
                            <Route
                                path='/'
                                element={Cards()}
                            />
                            <Route
                                path="/page_404"
                                element={<Page_404/>}
                            />
                            <Route
                                path="/*"
                                element={<Navigate to="/page_404"/>}
                            />
                            {/*TODO: Get unique id URL to work*/}
                            {/*<Route*/}
                            {/*    path={`${match.path}/:topicId`}>*/}
                            {/*</Route>*/}
                            {/*<Route*/}
                            {/*    path={match.path}*/}
                            {/*/>*/}
                        </Routes>
                    </div>
                </Router>
            </div>
        </>
    );
}


//TODO: Refactor as another "Page"
function Cards() {

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
        <>
            <div className='sidebar-holder'>
                <ul>
                    <il>Lorem ipsum dolor sit.</il>
                    <il>Lorem ipsum dolor sit amet, consectetur adipisicing.</il>
                    <il>Lorem ipsum dolor.</il>
                    <il>Lorem ipsum dolor sit.</il>
                    <il>Lorem ipsum dolor sit amet.</il>
                </ul>
            </div>

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
        </>
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
        tags: '#dog #lost #brown #toy_terier'
    }
}

export default App;