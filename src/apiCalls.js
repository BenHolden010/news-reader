export function fetchQuery(query){
  return fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=43781a23cadb44cc8823fc4f18059a23`)
  .then(res=>res.json())
}
export function fetchTopArticles(){
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=43781a23cadb44cc8823fc4f18059a23`)
  .then(res=>res.json())
}