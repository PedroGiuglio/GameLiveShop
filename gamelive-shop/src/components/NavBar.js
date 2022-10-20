import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {

  return (
    <header>
    <h3><Link to='/'>GameLive-Shop</Link></h3>
    <li><Link to='/PlayStation'>PLAYSTATION</Link></li>
    <li>XBOX</li>
    <li>NINTENDO</li>
    <Link to='/cart'><CartWidget></CartWidget></Link>
    </header>
  )
}
export default NavBar