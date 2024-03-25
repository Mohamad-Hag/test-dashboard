import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./styles/App.css";
import Products from "./pages/Products";
import Users from "./pages/Users";

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
