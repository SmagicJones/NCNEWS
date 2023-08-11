import { useParams, Link } from 'react-router-dom';
import Votes from './Votes';

import { useEffect, useState } from 'react';
import { fetchArticle } from '../utils/api';

const SingleArticle = () => {
  const { article_id } = useParams();

  const [foundArticle, setFoundArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticle(article_id).then((data) => {
      const article = data.article[0];
      console.log(article, 'article');
      setFoundArticle(article);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <ul className="mb-12 flex scroll-mt-40 flex-row items-center justify-center gap-8 p-6 sm:flex-row">
        <li className="max-w-100 bg-cyan-500 hover:bg-cyan-400 rounded-xl pb-4 items-center justify-center">
          <section className='mx-auto'>
            <h3 className="text-center text-5xl p-4">{foundArticle.title}</h3>
            <img className="p-2 mx-auto" src={foundArticle.article_img_url} alt={foundArticle.title} />
            <p className="text-2xl text-center p-2">Topic: {foundArticle.topic}</p>
            <p className="text-1xl p-2">Author: {foundArticle.author}</p>
            <p className="p-2">{foundArticle.body}</p>
            <p className="text-center p-2">Created: {new Date(foundArticle.created_at).getFullYear()}</p>
            <Votes votes={foundArticle.votes} />
            <p className="text-center">Article ID: {foundArticle.article_id}</p>
           
            <Link to={`/articles`}>
                <p className="text-center p-2 bg-yellow-300">Back</p>
             </Link>
          </section>
        </li>
      </ul>
    </>
  );
};

export default SingleArticle;
