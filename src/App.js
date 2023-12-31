import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {teslaData}  from './teslaData';
import  topData  from './topData';
import Articles from './Articles';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import ArticleView from './ArticleView';
import Form from './Form';
import {fetchQuery, fetchTopArticles} from './apiCalls';
import Error from './Error';

function App() {
  const [query, setQuery] = useState('')
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState({})
  let navigate = useNavigate()
  
  function getNews(newQuery){
    // setArticles(teslaData.articles)

    fetchQuery(newQuery)
    .then(data=>{
      if(data.status==='ok'){
        setArticles(data.articles)
      } else {
        navigate('/error')
      }
    })
  }

  useEffect(()=>{
    // setArticles(topData.articles)

  fetchTopArticles()
    .then(data=>{
      if(data.status==='ok'){
        setArticles(data.articles)
      } else {
        navigate('/error')
      }
    })

  },[])
  

  return (
    <div className="App">
      <header className='title'>
        <h1>News Reader</h1>
      </header>
      <Routes>
        <Route path='/' element={<Form query={query} setQuery={setQuery} getNews={getNews} articles={articles} setArticle={setArticle}/>}/>
        <Route path='/article' element={!article.title?
          <p>Nothing mached your search criteria, Please Try Again.<br/><Link to='/'>⬅️</Link></p>
          :<ArticleView article={article}/>}/>
        <Route path='/error' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
