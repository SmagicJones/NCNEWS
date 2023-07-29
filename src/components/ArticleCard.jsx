import { Link } from 'react-router-dom';

const ArticleCard = ({ title, topic, votes, article_img_url, article_id }) => {
  return (
    <li className="flex-1 max-w-xs bg-cyan-500 hover:bg-cyan-400 rounded-xl pb-4">
      <Link to={`/articles/${article_id}`}>
        <img className="p-2" id="articleImg" src={article_img_url} alt={title} />
      </Link>
      <h3 className="text-center text-1xl text-black ">{title}</h3>
      {/* <p className="mt-1 hidden text-center text-1xl pl-8 text-black sm:block">{topic}</p> */}
      <p className="mt-1 text-center text-1xl text-slate-500 dark:text-slate-400 sm:hidden">Votes: {votes}</p>
      <footer></footer>
    </li>
  );
};

export default ArticleCard;
