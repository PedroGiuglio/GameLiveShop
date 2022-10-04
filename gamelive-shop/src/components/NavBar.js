import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {

  return (
    <header>
    <h3><Link to='/'>GameLive-Shop</Link></h3>
    <CartWidget></CartWidget>
    <li><Link to='/clicker'>PLAYSTATION</Link></li>
    <li>XBOX</li>
    <li>NINTENDO</li>
    </header>
  )
}
export default NavBar