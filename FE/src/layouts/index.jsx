import { Routes, Route, useLocation } from "react-router-dom";
import Coba from "../pages/murid";
import BimbinganBelajar from "../pages/guru/data/bimbingan_belajar/index";
import Typography from "@mui/material/Typography";
import Login from "../pages/guru/login";
import Register from "../pages/guru/register";
import BimbinganKarir from "../pages/guru/data/bimbingan_karir";
import KonselingIndividu from "../pages/guru/data/konseling_individu";
import KonselingKelompok from "../pages/guru/data/konseling_kelompok";
// import PrivateRoute from "../services/PrivateRoute";

function Layout() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        {/* <Route path="/*" element={<PrivateRoute />}>*/}
        <Route path="/bimbingan-belajar" element={<BimbinganBelajar />} />
        <Route path="/bimbingan-karir" element={<BimbinganKarir />} />
        <Route path="/konseling-individu" element={<KonselingIndividu />} />
        <Route path="/bimbingan-konseling-kelompok" element={<KonselingKelompok />} />
        <Route path="/coba" element={<Coba />} />
      </Routes>
    </>
  );
}

export default Layout;
