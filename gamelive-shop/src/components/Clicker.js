import {useEffect, useState} from "react";

const Clicker = () => {


  const [counter, setCounter] = useState(0) 

  const stock = 14;

  useEffect(() => {
    console.log("Se montó el componente");
  }, [])

  useEffect(() => {
    console.log("Se renderizo el componente");
  })

  let date = new Date();
  let fecha = date.toDateString();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const [time, setTime] = useState(0);


  const clickHandlerMore = () =>{
    console.log("hiciste una suma");
    setTime(fecha + " " + hour + ":" + minutes + ":" + seconds)
    if(counter < stock){
      setCounter(counter + 1)
    }
  }

  const clickHandlerLess = () =>{
    console.log("hiciste una resta")
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  
    
  return (
    <div className="clickerSection">
        <button onClick={clickHandlerLess} className="btn m-5 bg-red-600 w-24 border-0">-</button>
        <div className="m-5 bg-yellow-200 w-24 text-center">{ counter }</div>
        <button onClick={clickHandlerMore} className="btn m-5 bg-green-600 w-24 border-0">+</button>
        {/* <div className="m-5 bg-sky-600 w-52"><h1>{time}</h1></div> */}
        <button className="btn m-5 bg-grey">Sumar al carrito</button>
    </div>
  )
}
export default Clicker