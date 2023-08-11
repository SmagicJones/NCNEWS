import './App.css';
import Header from './components/Header';
import ArticleList from './components/ArticlesList';
import Home from './components/Home';
import SingleArticle from './components/SingleArticle';
import { createBrowserRouter, Routes, Route, createRoutesFromElements, RouterProvider, Link } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path="/articles" element={<ArticleList/>}/>
      <Route path="/articles/topic/:topic" element={<ArticleList/>}/>
      <Route path="/articles/:article_id" element={<SingleArticle/>} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}/>   
    </>
  );
}

export default App;
