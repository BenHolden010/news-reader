import './Articles.css'
import ArticleCard from "./ArticleCard"

export default function Articles({articles, setArticle}){
  let i = 0
  let displayedArticles = articles.map(article=>{
    i++
    return(<ArticleCard 
      article={article} 
      key={i}
      setArticle={setArticle}
      />)
  })
  return(
  <div className="articles-container">
   {displayedArticles}
  </div>)
}