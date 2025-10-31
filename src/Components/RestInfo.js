import { useState } from "react"
import { useDispatch } from "react-redux"
import { addItems, DecrementItems, IncrementItems } from "../Stored/CartSlicer";
import { useSelector } from "react-redux";

export default function RestInfo({itemInfo}){
    

const dispatch = useDispatch();
  const items = useSelector(state=>state.cartslice.items);

  const element = items.find(item => item.id === itemInfo.card.info.id);

  const count = element? element.quantity:0;



function handleAddItems(){
  dispatch(addItems(itemInfo.card.info));
}

function handleIncrementItems(){
  dispatch (IncrementItems(itemInfo.card.info));
}
function handleDecrementItems(){
  dispatch(DecrementItems(itemInfo.card.info));
}




    return(
        <div className="w-full flex justify-between mb-6 ">
          <div className="w-[70%] "> 

        <div className="text-xl font-bold " >
            {itemInfo?.card?.info?.name}
        </div>
        <div className="font-semibold mt-1">{"₹"+itemInfo?.card?.info?.price/100}</div>
        <div className="text-green-700 font-medium text-base mt-1">{"⭐"+itemInfo?.card?.info?.ratings?.aggregatedRating?.rating}</div>
        
          <p>{itemInfo?.card?.info?.description}</p>

        </div>
      
        
        <div className="w-[20%] relative">
            <img className="w-39 h-36 object-cover rounded-2xl  " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+itemInfo?.card?.info?.imageId}></img>
           {
            count==0?(<button className="absolute left-10 bottom-[-20] shadow-md border border-white rounded-lg px-3 py-1   bg-white text-2xl font-bold text-green-600 " onClick={()=>handleAddItems()}>ADD </button>):(
              <div className="absolute left-10 bottom-[-20] flex justify-center items-center gap-3 shadow-md border border-white rounded-lg px-3 py-1   bg-white text-lg font-bold text-green-600 ">
                <button onClick={()=>handleDecrementItems()}>-</button>
                <span>{count}</span>
                <button onClick={()=>handleIncrementItems()}>+</button>
              </div>
             )
           }
        </div>
        </div>
    )
}