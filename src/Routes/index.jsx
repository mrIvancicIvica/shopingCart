import { Routes, Route } from "react-router-dom";
import Cart from "../Components/Cart";
import DetailsPage from "../Components/DetailsPage";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import PrivateRout from "./PrivateRout";
import RedirectToHome from "./RedirectToHome";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="products/:id" element={<DetailsPage />} />

      <Route element={<PrivateRout />}>
        <Route path="card" element={<Cart />} />
      </Route>

      <Route element={<RedirectToHome />}>
        <Route path="login" element={<Login />} />
      </Route>
      
      <Route element={<RedirectToHome />}>
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default index;
