import { Link } from 'react-router-dom'
import './ArticleCard.css'

export default function ArticleCard({article, setArticle}){
  let noImageAvailable = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
  return(
    <Link to='/article' onClick={()=>{setArticle(article)}} className="article-card">
      <div href={article.url}>
        <img className='list-img' src={article.urlToImage || noImageAvailable} alt={article.title}/>
        <p>{article.title}</p>
      </div>
      <p className='small-font'>{article.publishedAt}</p>
      <p className='small-font'>{article.description}</p>
    </Link>
  )
}