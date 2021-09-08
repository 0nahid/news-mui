import React, { useEffect, useState } from 'react';
import News from './components/News/News';

function App() {
  const apiKey = 'https://newsapi.org/v2/top-headlines?country=us&?q=nasa&ln=en&apiKey=6b23a9ae371c4946a324f098d26ca7da';
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(apiKey)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
  })
  return (
    <div>
      {articles.map(article => <News news={article} key={article.url} ></News>)}
    </div>
  );
}

export default App;
