import { fetchTopics } from '../utils/api';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Topics = () => {
  const [topics, setTopics] = useState([]);
 

  useEffect(() => {
    fetchTopics().then((data) => {
      console.log(data)
      setTopics(data);
    });
  }, []);

  return (
    <div className="dropdown inline-block relative">
      <button className="bg-yellow-300 text-yellow-700 font-semibold py-2 px-4 rounded inline-flex items-center">
        <span className="mr-1">Topics</span>
        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
        </svg>
      </button>
      <ul className="dropdown-menu absolute hidden text-yellow-700 pt-1">
        {topics.map((topic) => {
          return (
            <main key={topic.slug}>
              <li className="">
                <Link to={`articles/topic/${topic.slug}`}><div className="rounded-t bg-yellow-200 hover:bg-yellow-400 py-2 px-4 block whitespace-no-wrap">
                  {topic.slug}
                </div>
                </Link>
              </li>
            </main>
          );
        })}
      </ul>
    </div>
  );
};

export default Topics;
{
  /* <Link to={`/articles/topics/${topic.slug}`}>
<li value={topic.slug} key={topic.slug}>{topic.slug}</li>
</Link> */
}
