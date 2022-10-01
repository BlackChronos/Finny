import Navbar from "./Components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './App.css'
import Card from "./Components/Card";


function App() {
    const default_card = {
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


    return (
        <>
            <div>
                <Router>
                    <Navbar className='nav'/>
                    <div className='app-container'>
                        <div className='sidebar-holder'>
                            <ul>
                                <il>Lorem ipsum dolor sit.</il>
                                <il>Lorem ipsum dolor sit amet, consectetur adipisicing.</il>
                                <il>Lorem ipsum dolor.</il>
                                <il>Lorem ipsum dolor sit.</il>
                                <il>Lorem ipsum dolor sit amet.</il>
                            </ul>
                        </div>

                        <Card link='/' card_content={default_card}/>
                        <Card link='/' card_content={default_card}/>
                        <Card link='/' card_content={default_card}/>
                    </div>
                    <Routes>
                        <Route path='/' exact/>
                    </Routes>
                </Router>
            </div>


        </>
    );
}

export default App;