import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Navigate, Route, Routes,} from "react-router-dom";
import './App.css'
import Page_404 from "./Pages/Page404";
import CardsPage from "./Pages/CardsPage";
import {useEffect, useState} from "react";
import PostPage from "./Pages/PostPage";


function App() {

    const [mobile, setMobile] = useState(window.innerWidth <= 800);

    const handleResize = () => {
        setMobile(window.innerWidth <= 800);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('hi there');

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])


    return (
        <>
            <Router>
                <Navbar isMobile={mobile}/>

                <div className={mobile ? 'app-container mobile-version'
                    : 'app-container'}>
                    <Routes>
                        <Route
                            path='/'
                            element={<CardsPage isMobile={mobile}/>}
                        />
                        <Route
                            path="/page_404"
                            element={<Page_404/>}
                        />
                        <Route
                            path="/*"
                            element={<Navigate to="/page_404"/>}
                        />
                        <Route
                            path="posts/:postID"
                            element={<PostPage/>}
                        />
                    </Routes>
                </div>
            </Router>
        </>
    );
}


export default App;