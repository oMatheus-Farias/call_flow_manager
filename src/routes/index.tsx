import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import New from "../pages/New";
import Customers from "../pages/Customers";
import Profile from "../pages/Profile";

import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./privateRoutes";

export default function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={ <Login/> } />
      <Route path="/register" element={ <Register/> } />

      <Route path="/dashboard" element={ <PrivateRoutes><Dashboard/></PrivateRoutes> } />
      <Route path="/new" element={ <PrivateRoutes><New/></PrivateRoutes> } />
      <Route path="/customers" element={ <PrivateRoutes><Customers/></PrivateRoutes> } />
      <Route path="/profile" element={ <PrivateRoutes><Profile/></PrivateRoutes> } />
    </Routes>
  );
};