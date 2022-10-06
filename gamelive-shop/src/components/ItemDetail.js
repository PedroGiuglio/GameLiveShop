import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { products } from "./ItemList"

 const Loading = () =>{
  return(
    <strong className='m-8'>Loading...</strong>
  )
}

const Item = ({ item }) => {
  return (
    <div className="sectionCardDetail">
      <div className="card card-compact w-96 bg-base-100 shadow-xl itemCard">
        <figure className="urlImg"><img src={item.pictureUrl} alt="videogames" /></figure>
        <div className="card-body">
          <h2 className="card-title uppercase font-bold">${item.price}</h2>
          <p className="uppercase font-bold">{item.name}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{item.id}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ItemDetail = () => {

  const { id: itemId } = useParams()
  const [Loading, setLoading] = useState(true)
  const [item, setItem] = useState({})

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
      }, 1000);
    })
  }

  return (
    <>
    {Loading ? <Loading/> : <Item item={item}/>}
    </>
  )
}

export default ItemDetail