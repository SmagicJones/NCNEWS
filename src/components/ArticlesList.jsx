import {useState, useEffect} from "react"

// import {useContext} from 'react'
// import {UserContext} from '../contexts/UserContext'
import {useParams} from 'react-router-dom'

import {fetchArticles} from '../utils/api'

import ArticleCard from './ArticleCard'

// import Header from './Header'

// import Footer from './Footer'

// import Login from './Login'




const ArticlesList = () =>{
    const {topic} = useParams();
    // const {user, setUser} = useContext(UserContext)
    const [articlesList, setArticlesList] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetchArticles(topic).then((data)=>{
            const articles = data.articles
            setArticlesList(articles)
            setIsLoading(false)
        })
    }, [topic])

    

    if(isLoading){
        return( <section>
        <p>...Finding all the NCnews Articles </p>
        {/* <img id="logo" src='/src/images/bob-teaches-logo.svg'/> */}
        </section>
        )
    }
    console.log(articlesList.articles[0].author)

    return(
        <>
        <ul className="mx-auto my-12 flex list-none items-center gap-8 flex-col-reverse max-w-100">
        {articlesList.articles.map((article)=>{
            return(
                <ArticleCard title={article.title} topic={article.topic} votes={article.votes} article_img_url={article.article_img_url}  />
            )
        })}
        </ul>
        </>
    )

}

export default ArticlesList;