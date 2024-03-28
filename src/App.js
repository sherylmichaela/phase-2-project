import "./App.css";
import { CartProvider } from "react-use-cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Home from "./components/Home";
import ProductsIndex from "./components/ProductsPage/ProductsIndex";
import ProductsMain from "./components/ProductsPage/ProductsMain";
import ProductDisplay from "./components/ProductsPage/ProductDisplay";
import Wishlist from "./components/Wishlist/Wishlist";
import Cart from "./components/CartPage/Cart";
import ContactForm from "./components/ContactPage/ContactForm";
import NoPageFound from "./components/NoPageFound";
import { useState, useEffect } from "react";
import { products } from "./data";

export default function App() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/wishlist")
      .then((response) => response.json())
      .then((json) => {
        setWishlistItems(json);
      });
  }, []);

  function addToWishlist(id) {
    const prodInWishList = wishlistItems.find((item) => String(item.id) === id);

    if (!prodInWishList) {
      fetch("http://localhost:4000/wishlist/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products[id - 1]),
      })
        .then((response) => response.json())
        .then((json) => {
          setWishlistItems((prev) => [json, ...prev]);
        });
    }
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
                  element={<ProductsMain addToWishlist={addToWishlist} />}
                />
                <Route path=":productId" element={<ProductDisplay />} />
              </Route>
              <Route
                path="wishlist"
                element={<Wishlist wishlistItems={wishlistItems} />}
              />
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
