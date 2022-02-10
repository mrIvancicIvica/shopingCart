import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const RedirectToHome = () => {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? <Navigate to={"/"} /> : <Outlet /> ;
};

export default RedirectToHome;
