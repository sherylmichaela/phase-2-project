import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Home from "./components/Home";
import ProductPage from "./components/ProductsPage/ProductPage";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<Home />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
