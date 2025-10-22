import { useParams } from "react-router"
import { useEffect, useState } from "react";

export default function RestaurantMenu(){
    
    let {id}=useParams();
    console.log (id);

    const [RestData,setRestData]=useState(null);

    useEffect(()=>{
         async function fetchData(){

        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI =`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
        const response = await fetch(proxyServer+swiggyAPI);
        const data = await response.json();
        setRestData(data);
         }
 
         fetchData();
    },[])
 
    console.log (RestData);

    return(
        <>
        <h1>asidijkfdskjfnskjfhsd</h1>
        <h2>{id}</h2>
        </>
    )
}