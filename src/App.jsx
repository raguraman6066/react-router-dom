import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products";
import List from "./components/List";
import ProductDetails from "./components/ProductDetails";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import NewProduct from "./components/NewProduct";
import UpdateProduct from "./components/UpdateProduct";
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
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<List />} />
            <Route path="list" element={<List />} />
            <Route path="details" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
