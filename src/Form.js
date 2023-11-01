import { NavLink } from "react-router-dom";

export default function Form({query, setQuery, getNews}){
return (
  <div>
    <input
      type='text'
      placeholder='Search News'
      name='query'
      value={query}
      onChange={event => setQuery(event.target.value)}
    />
    
    <NavLink to={query}><button onClick = { () => getNews(query)}>SUBMIT</button></NavLink>
    </div>
)
}