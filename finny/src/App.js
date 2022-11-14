import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import './App.css'
import Page_404 from "./Pages/Page404";
import CardsPage from "./Pages/CardsPage";
import {useEffect, useState} from "react";
import PostPage from "./Pages/PostPage";
import LogInPage from "./Pages/LogInPage";
import useToken from "./Hooks/useToken";
import RegisterPage from "./Pages/RegisterPage";


function App() {
    const {token, setToken} = useToken();
    const [mobile, setMobile] = useState(window.innerWidth <= 800);

    const handleResize = () => {
        setMobile(window.innerWidth <= 900);
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
                <Navbar isMobile={mobile} userToken={token}/>


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
                        <Route
                            path="login"
                            element={
                                token ? <Navigate to="/"/>
                                    : <LogInPage setToken={setToken}/>
                            }
                        />
                        <Route
                            path="register"
                            element={
                                token ? <Navigate to="/"/>
                                    : <RegisterPage setToken={setToken}/>
                            }
                        />
                    </Routes>
                </div>
            </Router>
        </>
    );
}


export default App;