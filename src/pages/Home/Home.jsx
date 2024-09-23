import React from 'react';

// CSS
import './Home.css';

// images
import myPicture from '../../assets/me.png';

const Home = () => {
    return (
        <div className="home">
            <div className="_3-cols-main-william">
                <h1 className="title">
                    Eu sou <span className="name-color">William Dias</span>
                </h1>
                <img
                    className="myPicture"
                    src={myPicture}
                    alt="Picture of William Dias"
                />
                <p className="subtitle">Desenvolvedor FrontEnd</p>
            </div>
        </div>
    );
};

export default Home;
