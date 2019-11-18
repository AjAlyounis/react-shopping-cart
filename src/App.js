import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import { ProductsContext } from "./Contexts/ProductContext";
import { CartContext } from "./Contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };
  const removeItm = id => {
    const filteredArr = cart.filter(item => item.id !== id);
    return setCart(filteredArr);
  };

  return (
    <ProductsContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{ cart, removeItm }}>
        <div className="App">
          <Navigation cart={cart} />
          {/* Routes */}
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={ShoppingCart} />
        </div>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;
