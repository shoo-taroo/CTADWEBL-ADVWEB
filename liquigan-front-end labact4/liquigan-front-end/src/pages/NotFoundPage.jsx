import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFoundPage.css';

function NotFoundPage() {
    return (
        <div className="notfound-container">
            <img src= '/Luffy.png' alt="Luffy" className="page-image" />
            <h1>🏴‍☠️ 404 - Page Not Found</h1>
            <p>The Grand Line couldn't lead us here. This page is lost at sea.</p>
            <Link to="/" className="back-home-link">Return to Sunny</Link>
        </div>
    );
}

export default NotFoundPage;
