import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ArticleList.css';

function ArticleList({ articles }) {
    return (
        <div className="article-container">
            {articles.map(a => (
                <Link key={a.name} to={`/articles/${a.name}`} className="article-card">
                    <h3>{a.title}</h3>
                    <p>{a.content[0].substring(0, 150)}...</p>
                    <div className="learn-more">
                        <Link to={`/articles/${a.name}`} className="learn-more-link">Learn More</Link>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ArticleList;
