import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div >
  {
    cart.length > 0  ? 
    (<div className="flex flex-row justify-between">


      <div className="flex flex-row flex-wrap w-3/4 gap-3">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col items-center justify-between
     gap-3 p-4 mt-10 ml-5 rounded-xl outline w-64">

        <div >
          <div className="flex text-gray-700 font-semibold text-2xl text-left w-40 mt-1 justify-center">Your Cart</div>
          <div className="flex text-gray-700 font-semibold text-lg text-left w-40 mt-1 justify-center">Summary</div>
          <p>
            <span className="flex justify-center text-lime-400 font-semibold text-lg text-left w-40 mt-1">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col">
          <p className="flex justify-center text-lime-400 font-semibold text-lg text-left w-60 mt-1">Total Amount: ${totalAmount}</p>
          <button  className="flex flex-row justify-center gap-3 text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col items-center justify-center h-screen overflow-y-hidden gap-5">
      <h1 className="font-semibold text-2xl text-violet-500">Cart Empty</h1>
      <Link to={"/"}>
        <button className="flex flex-row  gap-3 text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase truncate 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
