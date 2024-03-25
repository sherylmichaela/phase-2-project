import "./App.css";
import { CartProvider } from "react-use-cart";
// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Home from "./components/Home";
import ProductsIndex from "./components/ProductsPage/ProductsIndex";
import ProductsMain from "./components/ProductsPage/ProductsMain";
import ProductDisplay from "./components/ProductsPage/ProductDisplay";
import Cart from "./components/CartPage/Cart";
import ContactForm from "./components/ContactPage/ContactForm";
// import SubmittedEnquiries from "./components/ContactPage/SubmittedEnquiries";

export default function App() {
  // const [enquiries, setEnquiries] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:4000/enquiries")
  //     .then((response) => response.json())
  //     .then((json) => setEnquiries(json));
  // }, []);

  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />}>
              <Route index element={<Home />} />
              <Route path="products" element={<ProductsIndex />}>
                <Route index element={<ProductsMain />} />
                <Route path=":productId" element={<ProductDisplay />} />
              </Route>
              <Route path="contact" element={<ContactForm />}></Route>
              <Route path="cart" element={<Cart />} />
              <Route
                path="*"
                element={
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <h2>Oops, no page found!</h2>
                  </div>
                }
              />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}
