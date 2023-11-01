export default function fetchQuery(query){
  return fetch(`https://newsapi.org/v2/everything?q=${query}&from=2023-09-30&sortBy=publishedAt&apiKey=43781a23cadb44cc8823fc4f18059a23`)
  .then(res=>res.json())
}