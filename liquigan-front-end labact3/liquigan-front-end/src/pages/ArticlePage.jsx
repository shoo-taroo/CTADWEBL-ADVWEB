import React from 'react';
import articlePageImage from '../assets/react.svg'; 

function ArticlePage(){
    return (
        <div className="page-container">
            <img src={articlePageImage} alt="Articles" className="page-image" />
            <h1>Article Page</h1>
            <p>You can see the main article.</p>
        </div>
    );
}

export default ArticlePage;