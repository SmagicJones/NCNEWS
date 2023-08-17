import { useState, useEffect } from 'react';

import { useParams, useSearchParams, Link } from 'react-router-dom';

import { fetchArticles } from '../utils/api';

import ArticleCard from './ArticleCard';
import Pagination from './Pagination';

const ArticlesList = () => {
  const { topic } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const [articlesList, setArticlesList] = useState([]);
  const [articleCount, setArticleCount] = useState(0);
  let newParams = {};

  const [isLoading, setIsLoading] = useState(true);

  function handleSort(e) {
    newParams = {
      sort_by: searchParams.get('sort_by'),
      order: searchParams.get('order'),
      limit: searchParams.get('limit'),
    };

    if (!newParams.order) delete newParams.order;
    if (!newParams.limit) delete newParams.limit;

    newParams.sort_by = e.target.value;
    setSearchParams(newParams);
  }

  function handleOrder(e) {
    newParams = {
      sort_by: searchParams.get('sort_by'),
      order: searchParams.get('order'),
      limit: searchParams.get('limit'),
    };

    if (!newParams.sort_by) delete newParams.sort_by;
    if (!newParams.limit) delete newParams.limit;

    newParams.order = e.target.value;
    setSearchParams(newParams);
  }

  function handleLimit(e) {
    newParams = {
      sort_by: searchParams.get('sort_by'),
      order: searchParams.get('order'),
      limit: searchParams.get('limit'),
    };

    if (!newParams.order) delete newParams.order;
    if (!newParams.sort_by) delete newParams.sort_by;

    newParams.limit = e.target.value;
    setSearchParams(newParams);
  }

  

  const sort_by = searchParams.get('sort_by');
  const order = searchParams.get('order');
  const limit = searchParams.get('limit') || 9;
  const p = searchParams.get('p');

  

  useEffect(() => {
    fetchArticles(topic, sort_by, order, limit, p).then((data) => {
      const articles = data.articles;
      const total_count = data.articles.total_count[0].count;
      setArticlesList(articles);
      setArticleCount(total_count);
      setIsLoading(false);
    });
  }, [topic, sort_by, order, limit, p]);

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
    <div className="top-0 z-10 bg-lime-500 text-white">
      <section className="mx-auto flex flex-wrap max-w-4xl items-center justify-between p-4">

      
      <label htmlFor="sort-by" className='hover:opacity-90'>Sort Articles by: </label>
      <select name="sort-by" id="sort-by" className="" onChange={handleSort}>
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
      <label htmlFor="order">Order</label>
      <select name="order" id="order" onChange={handleOrder}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <label htmlFor="limit">Limit</label>
      <select name="limit" id="limit" onChange={handleLimit}>
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="9">9</option>
        <option value="12">12</option>
        <option value="15">15</option>
        <option value="18">18</option>
        <option value="21">21</option>
      </select>
      </section>
      </div>
    



      <main className="mb-12 flex scroll-mt-40 flex-row items-center justify-center gap-8 p-6 sm:flex-row bg-green-300">
        <ul className="flex flex-wrap mt-4 gap-4 p-4 rounded-xl justify-center bg-yellow-300">
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
      <Pagination articleCount={articleCount}  limit={limit} />

    </>
  );
};

export default ArticlesList;
