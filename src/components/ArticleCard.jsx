// import {Link} from 'react-router-dom'


const ArticleCard = ({title, topic, votes, article_img_url,})=>{
   


    return (
        <li className="mx-auto flex w-2/3 flex-col items-center rounded-3xl border border-solid border-black bg-lime-500 px-2 py-6 shadow-xl sm:w-5/6 max-h-md h-w-50 mt-5">
        <h3 className="text-center text-3xl text-black mt-4">{title}</h3>
        <p className="mt-2 hidden text-left text-2xl pl-8 text-black sm:block">Topic: <em>{topic}</em></p>
        <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">Votes: {votes}</p>
        <img id="articleImg" src={article_img_url} alt={title}/>
        {/* <footer> 
        <Link to={`/articles/${article_id}`}><button className="infoButton">More Info</button></Link>
        </footer> */}
        
        </li>
    )

}

export default ArticleCard