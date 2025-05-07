import React from 'react';
import aboutImage from '../assets/Straw Hat Logo.png'; 

function AboutPage() {
    return (
        <div className="page-container">
            <div className="content-container">
                <img src={aboutImage} alt="Straw Hat Logo" className="page-image" />
                <h1>Meet the Straw Hat Pirates</h1>
                <p>The Straw Hat Pirates are a group of adventurers led by Monkey D. Luffy in the anime series *One Piece*. They are known for their camaraderie, individual dreams, and willingness to go to great lengths for each other. The group’s name comes from Luffy’s iconic straw hat, a memento given to him by his childhood hero, Shanks. Their journey is centered on seeking the legendary treasure known as the One Piece and exploring the Grand Line.</p>
            </div>
        </div>
    );
}

export default AboutPage;
