import { useState, useEffect } from 'react';

// import {useContext} from 'react'
// import {UserContext} from '../contexts/UserContext'
import { useParams } from 'react-router-dom';

import { fetchArticles } from '../utils/api';

import ArticleCard from './ArticleCard';

// import Header from './Header'

// import Footer from './Footer'

// import Login from './Login'

const ArticlesList = () => {
  const { topic } = useParams();
  // const {user, setUser} = useContext(UserContext)
  const [articlesList, setArticlesList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  console.log(topic, "topic before useEffect")

  useEffect(() => {
    console.log(topic, "topic")
    fetchArticles(topic).then((data) => {
    
      const articles = data.articles;
      console.log(articles)
      setArticlesList(articles);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) {
    return (
      <section>
        <p>...Finding all the NCnews Articles </p>
        {/* <img id="logo" src='/src/images/bob-teaches-logo.svg'/> */}
      </section>
    );
  }


  return (
    <>
      <main className="mb-12 flex scroll-mt-40 flex-row items-center justify-center gap-8 p-6 sm:flex-row">
        <ul className="flex flex-wrap mt-4 gap-4 bg-white p-4 rounded-xl justify-center">
          {articlesList.articles.map((article) => {
            return (
              <main key={article.article_id}>
                <ArticleCard
                  title={article.title}
                  topic={article.topic}
                  votes={article.votes}
                  article_img_url={article.article_img_url}
                  article_id={article.article_id}
                />
              </main>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default ArticlesList;
