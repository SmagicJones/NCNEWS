import {Link} from 'react-router-dom'


const ArticleCard = ({title, topic, votes, article_img_url, article_id})=>{
   


    return (
        <li className="flex-1 max-w-xs">
        <h3 className="text-center text-3xl text-black mt-4">{title}</h3>
        <p className="mt-2 hidden text-left text-2xl pl-8 text-black sm:block">Topic: <em>{topic}</em></p>
        <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">Votes: {votes}</p>
        <img className='' id="articleImg" src={article_img_url} alt={title}/>
        <footer> 
        <Link to={`/articles/${article_id}`}><button className="infoButton">More Info</button></Link>
        </footer>
        
        </li>
    )

}

export default ArticleCard