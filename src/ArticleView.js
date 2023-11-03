import './ArticleView.css'

export default function ArticleView({article}){
  let source = article.source?.name
  let noImageAvailable = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
return (
  <div className="article-view">
    <h2>{article.title}</h2>
    <div className='pub-auth small-font'>
      <p>Published by: {article.author} on {article.publishedAt}</p>
    </div>
    <img className='view-img' src={article.urlToImage || noImageAvailable} alt={article.title}/>
    <p>{article.content}</p>
    <a href={article.url}><p>Click Here to View More...</p></a>
    <p>Source: {source || "unknown"}</p>
  </div>
)
}