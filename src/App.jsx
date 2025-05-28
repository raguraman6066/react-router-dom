import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import NewProduct from "./components/NewProduct";
import UpdateProduct from "./components/UpdateProduct";
import CounterApp from "./components/CounterApp";
import WishList from "./components/WishList";
import ProductList from "./components/ProductList";
if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}
localStorage.setItem("cart", JSON.stringify([]));
// localStorage.setItem("cart", JSON.stringify([{ id: 1 }, { id: 2 }]));
// let dataFromWeb = JSON.parse(localStorage.getItem("cart"));
// console.log(dataFromWeb.length);
// localStorage.removeItem("cart");
function App() {
  let user = "guest";
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/:username" element={<Login />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/counterapp" element={<CounterApp />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<ProductList />} />
            <Route path="list" element={<ProductList />} />
            <Route path="details" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
