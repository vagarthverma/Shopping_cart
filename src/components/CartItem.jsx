
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="w-[250px] max-h-82">

      <div className="flex flex-col items-center justify-evenly
     gap-3 p-4 mt-10 ml-5 rounded-xl outline w-full h-full">

        <div className="h-[100px]">
          <img src={item.image} className="h-full w-full"/>
        </div>
        <div>
          <h1 classname="text-gray-700 font-semibold text-lg text-left truncate ">{item.title}</h1>
          <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left truncate">{item.description}</h1>
          <div className="flex justify-between gap-12 items-center w-full mt-5">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div className="flex flex-row  gap-3 text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase truncate 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in "
            onClick={removeFromCart}>
              <FcDeleteDatabase/>Remove Item
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
