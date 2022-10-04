import { useParams } from "react-router-dom"

const ItemDetail = () => {

    const {id} = useParams()

  return (
    <div className="m-5">
        <h3>Detalle del id: { id }</h3>
    </div>
  )
}
export default ItemDetail