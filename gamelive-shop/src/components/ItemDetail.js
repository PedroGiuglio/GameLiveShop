import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Clicker from "./Clicker"
import { useFavs } from "./context/AddContext"
import { products } from "./ItemList"


const ItemDetail = () => {

  const { id: itemId } = useParams()
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)

  const { favs, add } = useFavs();


  useEffect(() => {
    getItemDetails().then(response => {
      setItem(response)
      setLoading(false)
    })
  }, [])

  const getItemDetails = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products.find(p => p.id == itemId))
      }, 2000);
    })
  }

  const addHandler = () => {
      add(item.name)
      add('$' + item.price)
      add(item.id)
      add(<img src={item.pictureUrl} className="joya"></img>)   
  }

  if (loading) {
    return (
      <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
    )
  }


  return (
    <div className="sectionCardDetail">
      <div className="card card-compact w-96 bg-base-100 shadow-xl itemCard">
        <figure className="urlImg"><img src={item.pictureUrl} alt="videogames" /></figure>
        <div className="card-body">
          <h2 className="card-title uppercase font-bold">${item.price}</h2>
          <p className="uppercase font-bold">{item.name}</p>
          <div className="card-actions justify-end">
            <Clicker />
          </div>
        </div>
        <button onClick={addHandler} className="btn-primary">Agregar a carrito +</button>
      </div>
    </div>
  )
}

export default ItemDetail