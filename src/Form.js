import { NavLink } from "react-router-dom";
import Articles from "./Articles";

export default function Form({query, setQuery, getNews, articles, setArticle}){
return (
  <div>
    <input
      type='text'
      placeholder='Search News'
      name='query'
      value={query}
      onChange={event => setQuery(event.target.value)}
    />
    
    <button onClick = { () => getNews(query)}>Search News Articles</button>
    {!articles.length?
      <p>Nothing matched your search criteria, please try again.</p>
      :<Articles articles={articles} setArticle={setArticle}/>}
    </div>
)
}