export default function RestInfo({itemInfo}){
    return(
        <div className="w-full flex justify-between mb-6">
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
            <button className="absolute left-10 bottom-[-20] shadow-md border border-white rounded-lg px-3 py-1   bg-white text-2xl font-bold text-green-600 ">ADD </button>
        </div>
        </div>
    )
}