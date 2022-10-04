import { useParams } from "react-router-dom"

const ItemDetail = () => {

    const {id} = useParams()

  return (
    <div>Detalle del id: { id }</div>
  )
}
export default ItemDetail