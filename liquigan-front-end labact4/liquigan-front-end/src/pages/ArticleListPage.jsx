import React from 'react';
import articleListImage from '../assets/Sunny.png'; 
import ArticleList from '../components/ArticleList';
import articles from '../article-content';

function ArticleListPage() {
    return (
        <div className="article-list-page">
            <div className="header">
                <h1>Meet the Straw Hat Pirates 🏴‍☠️</h1>
                <img src={articleListImage} alt="Going Merry or Sunny" className="sunny-img" />
            </div>
            <ArticleList articles={articles} />
        </div>
    );
}

export default ArticleListPage;
