import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import "./HomePage.css"
import Card from "../Components/Card";

export function HomePage({isMobile, token}) {

    let navigate = useNavigate();
    const toFeed = () => navigate("/feed");
    const toSignIn = () => navigate("/register");

    let text = token ? "We are glad to see You again!" : "Welcome to Finny!"

    const [userData, setUserData] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function handleRequests() {
            setUserData(await requestPosts());
        }

        handleRequests().then();
    }, []);

    useEffect(() => {
        setPosts(userData.map((data) =>
            <Card isMobile={isMobile} card_content={data}/>
        ));
    }, [userData]);

    async function requestPosts() {
        return fetch("http://localhost:8080/posts?limit=5")
            .then(response => response.json())
    }

    return (
        <div className="home-page">
            <h1 className="greeting">{text}</h1>

            <div className="about-us">
                <h2>About Finny</h2>
                <div className="img-split">
                    <img src="images/Home.png" alt="Pets image"/>
                    <div>
                        <h3>Definition of Finny:</h3>
                        <p>
                            Finny is a web-site, where people on one hand can create posts about their lost pets.
                            On the other hand people can respond to posts and help the owners in need,
                            or create posts about pets they have found.
                        </p>
                        <h3>Our target audience</h3>
                        <p>
                            The target audience of the Finny is: the owners of lost animals and
                            the people who found lost smaller friends.
                        </p>
                    </div>
                </div>
            </div>
            {
                token ? null :
                    <input
                        type="button"
                        value="Join Us"
                        onClick={toSignIn}
                    />
            }

            <h2>Most Recent Posts:</h2>
            {posts}
            <input
                type="button"
                value="All Posts"
                onClick={toFeed}
            />

            <div className="about-us">
                <h2>Our Team</h2>
                <div className="dev-cards">
                    <div className="dev-card">
                        <h3>Markin Oleksandr</h3>
                        <p>Main developer(front-end, back-end)</p>
                        <textarea readOnly={true} value={"+38(097)942 73-70"}></textarea>
                    </div>
                    <div className="dev-card">
                        <h3>Panzyr Vitaliy</h3>
                        <p>Front-end developer, PR-manager</p>
                        <textarea readOnly={true} value={"+38(012)345 67-89"}></textarea>
                    </div>
                    <div className="dev-card">
                        <h3>Poslavska Lyudmila</h3>
                        <p>Creator of the idea, front-end developer</p>
                        <textarea readOnly={true} value={"+38(012)345 67-89"}></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}