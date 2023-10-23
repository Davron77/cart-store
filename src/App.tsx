import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
