import './Shopping/Shopping.css'
import { Link } from 'react-router-dom'

const MainNav = () => {
  return (
    <nav className="routing">
      <Link to="/">
        <h3 >Shopping</h3>
      </Link>
      <Link to="/todo" className="cart">
        <h3>Todo</h3>
      </Link>
      <Link to="/movies">
        <h3>Movies</h3>
      </Link>
      <Link to="/navigation" className="cart">
        <h3>Navigation</h3>
      </Link>
    </nav>
  )
}

export default MainNav
