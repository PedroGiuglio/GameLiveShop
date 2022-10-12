import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Clicker from "./Clicker"
import { products } from "./ItemList"


const ItemDetail = () => {

  const { id: itemId } = useParams()
  const [item, setItem] = useState({})

  useEffect(() => {
    getItemDetails().then(response => {
      setItem(response)
    })
  }, [])

  const getItemDetails = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products.find(p => p.id == itemId))
      }, 1000);
    })
  }

  return (
     <div className="sectionCardDetail">
      <div className="card card-compact w-96 bg-base-100 shadow-xl itemCard">
         <figure className="urlImg"><img src={item.pictureUrl} alt="videogames" /></figure>
         <div className="card-body">
           <h2 className="card-title uppercase font-bold">${item.price}</h2>
           <p className="uppercase font-bold">{item.name}</p>
           <div className="card-actions justify-end">
             <Clicker/>
           </div>
         </div>
       </div>
     </div>  
  )
}

export default ItemDetail