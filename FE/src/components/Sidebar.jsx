import { List, ListItem, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Sidebar = () => {
    const location = useLocation();
    const menuItems = [
        { name: 'Konseling Individu', path: '/konseling-individu' },
        { name: 'Bimbingan dan Konseling Kelompok', path: '/bimbingan-konseling-kelompok' },
        { name: 'Bimbingan Belajar', path: '/bimbingan-belajar' },
        { name: 'Bimbingan Karir', path: '/bimbingan-karir' },
    ];

    return (
        <div className="w-[313px] p-5 bg-white">
            <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '15px',
        }}
    >
        <img
            src="img/logo-bgwhite.png"
            alt="Logo Putih"
            style={{
                objectFit: 'contain',
                width: '120px',
            }}
        />
    </div>
            <List className="mt-10 flex flex-col gap-2 font-poppins">
                {menuItems.map((item, index) => (
                    <ListItem
                        key={index}
                        component={Link}
                        to={item.path}
                        className={`p-[10px] rounded-md font-semibold ${location.pathname === item.path ? "bg-[#9F5BC2] text-white" : "text-[#666687]"}`}
                    >
                        <Typography className="font-poppins">{item.name}</Typography>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default Sidebar
