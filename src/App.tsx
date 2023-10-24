import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Cart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
