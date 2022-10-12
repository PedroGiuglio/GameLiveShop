import { Link } from "react-router-dom"

const ItemCard = ({id, name, price, pictureUrl}) => {
    
  return (
    <Link to={`/item/${id}`}>
    <div className="card card-compact w-96 bg-base-100 shadow-xl itemCard">
     <figure className="urlImg"><img src={pictureUrl} alt="videogames" /></figure>
  <div className="card-body">
    <h2 className="card-title uppercase font-bold">${price}</h2>
    <p className="uppercase font-bold">{name}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now!</button>
    </div>
  </div>
</div>
</Link>
  )
}
export default ItemCard