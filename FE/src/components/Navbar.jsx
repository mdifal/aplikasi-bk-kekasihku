import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Icon } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Button, Drawer, Hidden, Link } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useLocation, useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { DarkButtonIcon } from "../components/Button.jsx";
import Sidebar from "./Sidebar.jsx";
// import withAuth from "@/services/hoc/withAuth";
// import { encryptSessionStorage } from "@/services/encryptSessionStorage";


const Navbar = () => {
  const [namaLengkap, setNamaLengkap] = useState("Nisrina Wafa");
  const [email, setEmail] = useState("nisrinawafaz@gmail.com");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    localStorage.clear();
  };

  const location = useLocation();
  const path = location.pathname;

  const isOnDaftarResep = path.startsWith("/daftar-resep");
  const isOnResepSaya = path.startsWith("/resep-saya");
  const isOnResepFavorit = path.startsWith("/resep-favorit");

  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false)
  const handlerAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen)
  }
  const signOut = () => {
    // encryptSessionStorage.removeItem('access_token')
    // sessionStorage.removeItem('is_session_expired');
    // window.location.reload()
  }

  return (
    <AppBar
      position="static"
      style={{ background: "white", boxShadow: "none" }}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent={{ xs: "space-between", md: "end" }}
          alignItems="center"
          width="100%"
          marginX="auto"
          paddingY="15px"
        >{/* Drawer Navbar Mobile */}
          <Box component="div" display={{ xs: "flex", md: "none" }}>
            <IconButton onClick={toggleDrawer} color="#351C43">
              <Box sx={{ display: "flex", gap: "5px" }}>
                <MenuIcon />
              </Box>
            </IconButton>
            <Drawer
              anchor="left"
              open={isOpen}
              onClose={toggleDrawer}
              sx={{

                display: { xs: "block", md: "none" },
              }}>
              <Box
                sx={{
                  paddingTop: "10px",
                  paddingX:'5px',
                  height: "100vh",
                  display:"flex",
                  flexDirection:'row'
                }}>
                  <Sidebar></Sidebar>
                <Box>
                  <IconButton open={isOpen} onClick={toggleDrawer}>
                    <CloseIcon sx={{ color: "#351C43", marginTop:'15px' }} />
                  </IconButton>
                </Box>
              </Box>
            </Drawer>
          </Box>
          {/* End of Drawer Navbar Mobile */}

          <div className="relative">
            <Box display="flex" flexDirection="row" alignItems="center" gap="5px">
              <AccountCircleOutlinedIcon sx={{ fontSize: '40px', color: '#351C43' }} />
              <Box>
                <Typography sx={{ fontSize: '16px', color: '#351C43', fontWeight: '600' }}>
                  {namaLengkap}
                </Typography>
                <Typography sx={{ fontSize: '14px', color: '#351C43' }}>
                  {email}
                </Typography>
              </Box>
              <IconButton title="actionProfile" onClick={handlerAccountMenu}>
                <ExpandMoreIcon sx={{ fontSize: '40px', color: '#351C43' }} />
              </IconButton>
            </Box>
            {isAccountMenuOpen && (
              <Box
                className="w-[250px]"
              >
                <div className="w-[150px] absolute right-0 flex justify-end">
                  <DarkButtonIcon onClick={signOut} text="Sign Out" icon={<LogoutOutlinedIcon />} />
                </div>
              </Box>
            )}
          </div>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
