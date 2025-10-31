import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import Restaurant from "./Components/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantMenu from "./Components/RestaurantMenu";
import SecondaryHome from "./Components/SecondaryHome";
import { Provider } from "react-redux";
import {store} from "./Stored/Stores"
import Checkout from "./Components/checkout";

// Header section: Let's build it

function App(){
    
    return(
       
       <Provider store={store}>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route element={<SecondaryHome></SecondaryHome>}>
        <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
        <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
        </Route>
        
       <Route path="/Checkout" element={<Checkout/>}></Route>
        </Routes>
       </BrowserRouter>
      </Provider>
       
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);



// Proxy server "https://cors-anywhere.herokuapp.com/"; 


