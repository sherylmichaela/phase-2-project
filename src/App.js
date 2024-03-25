import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Home from "./components/Home";
import ProductPage from "./components/ProductsPage/ProductPage";
import Contact from "./components/ContactPage/Contact";
import Cart from "./components/CartPage/Cart";
import { CartProvider } from "react-use-cart";

export default function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />}>
              <Route index element={<Home />} />
              <Route path="products" element={<ProductPage />}></Route>
              <Route path="contact" element={<Contact />} />
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
                    <h2>Oops, wrong page!</h2>
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
