import './App.css';
import Header from './components/Header';
import ArticleList from './components/ArticlesList';
import Home from './components/Home';
import SingleArticle from './components/SingleArticle';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/topic/:topic" element={<ArticleList />}/>
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
     
    </>
  );
}

export default App;
