import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";


export default function RestaurantMenu(){
   
    let {id} = useParams();
   const [selected,setSelected]=useState(null);

    const [RestData, setRestData] = useState([]);

    const [restName,setRestName]=useState(null);

    useEffect(()=>{
    
        async function fetchData() {
           
           const proxyServer = "https://cors-anywhere.herokuapp.com/"
           const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
           const response = await fetch(proxyServer+swiggyAPI);
           const data = await response.json();
           const ResturantName= data?.data?.cards[0]?.card?.card?.text;
           const tempData=data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
           const filterData=tempData.filter((items)=> "title" in items?.card?.card);
           setRestData(filterData);
           setRestName(ResturantName)

        }
   
        fetchData();
       },[])


    return(
      <div>

         <div  className="w-[80%] mx-auto mt-15 mb-15   text-3xl font-bold underline  underline-offset-7  ">{restName}</div>
      <div className="w-[80%] mx-auto mt-10 mb-20 " >
         <button className={`border text-xl px-11 py-2 mr-3 rounded-2xl ${((selected==="veg")?("bg-green-500"):("bg-gray-300"))}`}   onClick={()=>setSelected(selected==="veg"?null:"veg")}>VEG</button>
         <button className={`border text-xl px-6 py-2 rounded-2xl ${((selected==="nonveg")?"bg-red-500":"bg-gray-300")}`} onClick={()=>setSelected(selected==="nonveg"?null:"nonveg")}>NON-VEG</button>
         

      </div>
       <div className="w-[80%] mx-auto mt-10">
        {RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodSelected={selected}/>)}
       </div>

       </div>
        
    )

}