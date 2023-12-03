import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import New from "../pages/New";
import Customers from "../pages/Customers";
import Profile from "../pages/Profile";

import { Routes, Route } from "react-router-dom";

export default function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={ <Login/> } />
      <Route path="/register" element={ <Register/> } />

      <Route path="/dashboard" element={ <Dashboard/> } />
      <Route path="/new" element={ <New/> } />
      <Route path="/customers" element={ <Customers/> } />
      <Route path="/profile" element={ <Profile/> } />
    </Routes>
  );
};