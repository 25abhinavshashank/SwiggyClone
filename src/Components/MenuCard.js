import { useState } from "react";
import RestInfo from "./RestInfo"

export default function MenuCard({menuItems}){

    const [isOpen,setIsOpen]=useState(true);


    if(!isOpen){
        return(
        
        <div className="w-full ">
            <div className="flex justify-between w-full items-center">
                 <div className="text-2xl font-extrabold mb-2">{menuItems?.title}{"("+menuItems?.itemCards?.length+")"}</div>

                 <button className="h-9 w-18 flex items-center justify-center text-3xl font-semibold mr-20 border-black border m-5 pb-2 rounded-lg" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'-':'+'}</button>
            </div>
             <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
    
        </div>
        
        )
    }

   if("categories" in menuItems){
    return(
         <>
     <div className="text-2xl font-extrabold mb-2">{menuItems?.title}</div>
    <div >
       {menuItems?.categories?.map((itemInfo)=>
       <MenuCard  menuItems={itemInfo} key={itemInfo?.title}>
        </MenuCard>
       )}
    </div>
     </>
    )
   }

    return(
   
     <>
     <div className="flex justify-between w-full">
                 <div className="text-2xl font-extrabold mb-2">{menuItems?.title}{"("+menuItems?.itemCards?.length+")"}</div>

                 <button className="h-9 w-18 flex items-center justify-center text-3xl font-semibold mr-20 border-black border m-5 pb-2 rounded-lg hover:bg-gray-400"  onClick={()=>setIsOpen(!isOpen)}>{isOpen?'-':'+'}</button>
     </div>
     <div>
       {menuItems?.itemCards?.map((itemInfo)=>
       <RestInfo  itemInfo={itemInfo} key={itemInfo?.card?.info?.id}>
        </RestInfo>
       )}
    </div>
     <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
    </>

  
    )
}