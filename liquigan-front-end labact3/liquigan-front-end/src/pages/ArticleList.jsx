import React from 'react';
import articleListImage from '../assets/Sunny.png'; 

function ArticleList() {
    return (
        <div className="page-container" style={{ textAlign: 'center' }}>
            <img src={articleListImage} alt="Articles" className="page-image" style={{ display: 'block', margin: '0 auto' }} />
            <h1>Our Nakama</h1>
            <p>The Straw Hat Pirates are a group of adventurers led by Monkey D. Luffy, each with their own dreams and goals. Together, they embark on a journey to find the legendary treasure known as the One Piece.</p>

            <h2>Meet the Members:</h2>

            <ul style={{ listStyleType: 'disc', display: 'inline-block', textAlign: 'left' }}>
                <li>
                    <strong>Monkey D. Luffy</strong> - <em>Captain</em>  
                    <p>Luffy is the leader of the Straw Hat Pirates. He is on a mission to become the Pirate King and is known for his indomitable spirit and ability to stretch his body like rubber due to eating the Gomu Gomu no Mi fruit.</p>
                </li>

                <li>
                    <strong>Roronoa Zoro</strong> - <em>Swordsman</em>  
                    <p>Zoro is the crew’s swordsman and aims to become the world’s greatest swordsman. He uses a unique three-sword style and is highly skilled in combat.</p>
                </li>

                <li>
                    <strong>Nami</strong> - <em>Navigator</em>  
                    <p>Nami is the crew's navigator and skilled cartographer. She has a passion for mapping the world and is an expert in navigating the seas, using her cleverness to outsmart enemies.</p>
                </li>

                <li>
                    <strong>Usopp</strong> - <em>Sniper</em>  
                    <p>Usopp is the crew’s sharpshooter and inventor. He is known for his creativity and often comes up with unique gadgets and weapons for the crew.</p>
                </li>

                <li>
                    <strong>Sanji</strong> - <em>Cook</em>  
                    <p>Sanji is the crew's cook and a martial artist. He is known for his powerful kicks in combat and has a deep love for cooking and making delicious meals for the crew.</p>
                </li>

                <li>
                    <strong>Tony Tony Chopper</strong> - <em>Doctor</em>  
                    <p>Chopper is the crew's doctor, a reindeer who ate the Hito Hito no Mi fruit, granting him the ability to transform into human-like forms. He is an expert in medicine and healing.</p>
                </li>

                <li>
                    <strong>Nico Robin</strong> - <em>Archaeologist</em>  
                    <p>Robin is the crew’s archaeologist and a former assassin. She has the power of the Hana Hana no Mi fruit, which allows her to grow limbs on any surface. She seeks to uncover the True History of the world.</p>
                </li>

                <li>
                    <strong>Franky</strong> - <em>Shipwright</em>  
                    <p>Franky is the crew's shipwright and a cyborg. He designed and built the crew's current ship, the Thousand Sunny, and is highly skilled in both shipbuilding and combat.</p>
                </li>

                <li>
                    <strong>Brook</strong> - <em>Musician</em>  
                    <p>Brook is the crew's musician and a living skeleton. After consuming the Yomi Yomi no Mi fruit, he returned to life after dying, making him immortal. He is a skilled swordsman and a master of music.</p>
                </li>

                <li>
                    <strong>Jinbe</strong> - <em>Helmsman</em>  
                    <p>Jinbe is the crew’s helmsman and a Fish-Man with mastery over Fish-Man Karate. He was formerly a warlord of the sea and has immense strength and wisdom.</p>
                </li>
            </ul>
        </div>
    );
}

export default ArticleList;
