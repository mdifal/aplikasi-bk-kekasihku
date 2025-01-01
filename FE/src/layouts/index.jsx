import { Routes, Route, useLocation } from "react-router-dom";
import Coba from "../pages/murid";
import BimbinganBelajar from "../pages/guru/data/bimbingan_belajar/index";
import Typography from "@mui/material/Typography";
import Login from "../pages/guru/login";
import Register from "../pages/guru/register";
// import PrivateRoute from "../services/PrivateRoute";

function Layout() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/bimbingan-belajar" element={<BimbinganBelajar />} />
        <Route path="/coba" element={<Coba />} />
        {/* <Route path="/*" element={<PrivateRoute />}>*/}
      </Routes>
    </>
  );
}

export default Layout;
