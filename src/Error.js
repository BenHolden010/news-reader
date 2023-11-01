import { Link } from "react-router-dom";

export default function Error(){
  return(
  <div className="error">
    <p>Your Search Was Invalid, Please Return Home and Try Another Search.</p>
    <Link to='/'>⬅️</Link>
  </div>)
}