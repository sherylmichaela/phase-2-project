import "./App.css";
import { CartProvider } from "react-use-cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Home from "./components/Home";
import ProductsIndex from "./components/ProductsPage/ProductsIndex";
import ProductsMain from "./components/ProductsPage/ProductsMain";
import ProductDisplay from "./components/ProductsPage/ProductDisplay";
import Wishlist from "./components/Wishlist";
import Cart from "./components/CartPage/Cart";
import ContactForm from "./components/ContactPage/ContactForm";
import NoPageFound from "./components/NoPageFound";
import { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/wishlist")
      .then((response) => response.json())
      .then((json) => {
        setName(json[0].name);
      });
  });

  function updateName(id) {
    fetch("http://localhost:4000/wishlist/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "sheryl" }),
    })
      .then((response) => response.json())
      .then((json) => {
        setName(json.name);
      });
  }

  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />}>
              <Route index element={<Home />} />
              <Route path="products" element={<ProductsIndex />}>
                <Route
                  index
                  element={<ProductsMain updateName={updateName} />}
                />
                <Route path=":productId" element={<ProductDisplay />} />
              </Route>
              <Route path="wishlist" element={<Wishlist name={name} />} />
              <Route path="contact" element={<ContactForm />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NoPageFound />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}
