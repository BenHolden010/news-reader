import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { mockData } from './mockData';
import Articles from './Articles';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import ArticleView from './ArticleView';
import Form from './Form';
import fetchQuery from './fetchQuery';
import Error from './Error';

function App() {
  const [query, setQuery] = useState('')
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState({})
  let navigate = useNavigate()
  function getNews(newQuery){
    setArticles(mockData.articles)

    // fetchQuery(newQuery)
    // .then(data=>{
    //   if(data.status==='ok'){
    //     setArticles(data.articles)
    //     console.log("ok!!!")
    //   } else {
    //     navigate('/error')
    //     console.log("not ok :(")
    //   }
    // })
  }
  

  return (
    <div className="App">
      <header className='title'>
        <h1>News Reader</h1>
      </header>
      <Routes>
        <Route path='/' element={<Form query={query} setQuery={setQuery} getNews={getNews}/>}/>
        <Route path='/:query' element={!articles.length?
          <p>Nothing mached your search criteria, Please Try Again.<br/><Link to='/'>⬅️</Link></p>
          :<Articles articles={articles} setArticle={setArticle}/>}/>
        <Route path='/article' element={!article.title?
          <p>Nothing mached your search criteria, Please Try Again.<br/><Link to='/'>⬅️</Link></p>
          :<ArticleView article={article}/>}/>
        <Route path='/error' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
