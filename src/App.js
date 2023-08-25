import React, { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Dummymeals from "./component/Content/Dummymeals";
import Cart from "./component/Content/Cart/Cart";
import CartProvider from "./Store/Cart-provider";




function App() {

  const [cartShow, setCartShow] = useState(false)
  
  const ShowCartItem = () => {
    setCartShow(true);
  }
  
  const HideCartItem = () => {
    setCartShow(false);
  }

  return (
    <CartProvider>
        {cartShow && <Cart Close={HideCartItem}/>}
        <Navbar Show={ShowCartItem} />
        <Dummymeals />
    </CartProvider>
  );
}

export default App;
