import { Routes, Route, useLocation } from "react-router-dom";
import Coba from "../pages/murid";
import Typography from "@mui/material/Typography";
import Login from "../pages/guru/login";
import Register from "../pages/guru/register";
// import PrivateRoute from "../services/PrivateRoute";

// import Navbar from "../components/Navbar";

function Layout() {
  const location = useLocation();
  const path = location.pathname;

  const isLogin = path === "/";
  const isRegister = path === "/signup";

  return (
    <>
    
      {/* {isLogin || isRegister ? <></> : <Navbar />} */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/coba" element={<Coba />} />
        {/* <Route path="/*" element={<PrivateRoute />}>*/}
      </Routes>
    </>
  );
}

export default Layout;
