import { useEffect, useState } from "react"
import ItemCard from "./ItemCard"

const products = [
    {id: 1, name:"PlayStation 5", price:"999.99", pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_965265-MCO44171893180_112020-O.jpg"},
    {id: 2, name:"Nintendo Switch", price:"449.99", pictureUrl:"https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/hardware/switch/nintendo-switch-new-package/gallery/image01"},
    {id: 3, name:"Xbox Series S", price:"799.99", pictureUrl:"https://m.media-amazon.com/images/I/31GIE1eNKsL._SL500_.jpg"},
    {id: 4, name:"Sony Controller", price:"69.99", pictureUrl:"https://images.fravega.com/f1000/a23c2e9cbe114eca833fc5f7288457fc.jpg"},
    {id: 5, name:"Logitech G9 26", price:"349.99", pictureUrl:"https://media.gamestop.com/i/gamestop/11117762/Logitech-G923-TRUEFORCE-Racing-Wheel-and-Pedals-for-Xbox-Series-X?fmt=auto"},
    {id: 6, name:"Headset HyperX", price:"49.99", pictureUrl:"https://www.invidcomputers.com/images/000000000041404387884414043--1-.jpg"},
    {id: 7, name:"Sony Controller", price:"69.99", pictureUrl:"https://images.fravega.com/f1000/a23c2e9cbe114eca833fc5f7288457fc.jpg"},
    {id: 8, name:"Sony Controller", price:"69.99", pictureUrl:"https://images.fravega.com/f1000/a23c2e9cbe114eca833fc5f7288457fc.jpg"},
]

const ItemList = () => {

    const [items, setItems] = useState([])

    useEffect( ()=>{
        getProducts().then( res => {
            setItems(res)
        })
        .catch( err => {
            console.log('err: ' + err);
        })
    }, [])

    const getProducts = ()=>{
        return new Promise( (resolve) =>{
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}

  return (
    <div className="itemList">
    { items.map( item => <ItemCard key={item.id} {...item}></ItemCard> )}
    </div>
  )
}

export default ItemList