import React from 'react';
import homeImage from '../assets/Chopper.png'; 

function HomePage() {
    return (
        <div className="page-container">
            <img src={homeImage} alt="Welcome" className="page-image" />
            <h1>Let's Sail with Straw Hats!</h1>
            <p>Join their adventures to claim the fabled treasure of One Piece!</p>
        </div>
    );
}

export default HomePage;
