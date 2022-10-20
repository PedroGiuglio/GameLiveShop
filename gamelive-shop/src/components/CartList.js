import { useFavs } from "./context/AddContext"

const CartContent = () => {

  const { favs } = useFavs()
  return (
    <div className="cartContent">
      {favs.map(f => <li>{f}</li>)}
    </div>
  )
}


const CartList = () => {
  return (
      <div className="cartList">
        <CartContent/>
      </div>
  )
}
export default CartList