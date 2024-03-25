import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Users from "./pages/Users";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/products" element={<Products />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
