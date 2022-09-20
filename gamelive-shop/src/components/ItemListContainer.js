const ItemListContainer = ({nombre}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.pinimg.com/736x/50/d4/76/50d476b8e11ae9ca23a7f9d6ae95e409.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title nombre">Welcome to {nombre}!</h2>
    <p>Do you want to buy a new game?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}
export default ItemListContainer