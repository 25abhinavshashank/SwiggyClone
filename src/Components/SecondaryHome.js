import { Outlet } from "react-router"
import { Link } from "react-router"
import { useSelector } from "react-redux"

export default function SecondaryHome(){
    const counter=useSelector(state=>state.cartslice.count)
    return(
        <>
        <div className="w-[80%] mx-auto px-5 py-3 flex justify-between items-center text-3xl bg-gray-400 mt-2 rounded-xl">
            <Link to={'/'} >
            <div className="text-orange-600 font-bold">
                <p>Swiggy</p> 
            </div>
            </Link>
            <Link to={"/Checkout"}>
            <div>
                <p className="font-medium">Cart {`(${counter})`}</p>
            </div>
            </Link>
        </div>
        <Outlet></Outlet>
        </>
    )
}