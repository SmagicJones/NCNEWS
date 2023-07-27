import { useParams } from 'react-router-dom'
import Votes from './Votes'


import { useEffect, useState } from 'react'
import { fetchArticle } from '../utils/api'



const SingleArticle = ()=>{
    const {article_id} = useParams();

    const [foundArticle, setFoundArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchArticle(article_id).then((data) => {
            const article = data.article[0]
            console.log(article, "article")
            setFoundArticle(article)
            setIsLoading(false)
        })
    }, [])


    if(isLoading){
        return (
            <h1>Loading...</h1>
        )
    }

    return(
        <>
        <ul className="card">
         <li>
    <section>
    <p className="">{foundArticle.title}</p>
    <img id="" src={foundArticle.article_img_url} alt={foundArticle.title}/>
    <p>Topic: {foundArticle.topic}</p>
    <p>Author: {foundArticle.author}</p>
    <p>{foundArticle.body}</p>
    <p>Created: {new Date(foundArticle.created_at).getFullYear()}</p>
    <Votes votes={foundArticle.votes}/>
    <p>Article ID: {foundArticle.article_id}</p>
    </section>
    </li>
    </ul>
    </>
    )

}

export default SingleArticle;