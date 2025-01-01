import { useState } from "react";
import {
    Box,
    Typography,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableSortLabel,
    TableBody,
    IconButton,
} from "@mui/material";
import { Visibility, Delete } from "@mui/icons-material";
import Navbar from "../../../../components/Navbar";
import Sidebar from "../../../../components/Sidebar";
import PaginationComponent from "../../../../components/Pagination"

const BimbinganBelajar = () => {
    const [sortField, setSortField] = useState("no");
    const [sortDirection, setSortDirection] = useState("asc");

    const handleSort = (field) => {
        const isAsc = sortField === field && sortDirection === "asc";
        const direction = isAsc ? "desc" : "asc";
        setSortField(field);
        setSortDirection(direction);
    };

    const [params, setParams] = useState({ page: "1", size: "10" });
    const totalData = 100; // total data yang tersedia


    return (
        <div className="flex h-screen bg-[#EEEEEE]" >
            <div className="hidden md:flex">
                <Sidebar />
            </div>
            <div className="flex-1 flex flex-col max-w-[100%]">
                <Navbar />
                <main className="flex-grow w-full p-7">
                    <Box
                        sx={{
                            width: '100%',
                            height: "100%",
                            bgcolor: "white",
                            borderRadius: "4px",
                            padding: "30px",
                            overflowX: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <div>
                            <Typography sx={{ fontSize: "26px", fontWeight: "700" }}>
                                Bimbingan Belajar
                            </Typography>
                            <hr className="border border-[#9F5BC2] my-1 w-[45%]" />
                        </div>
                        <div style={{ flexGrow: 1}}>
                            <TableContainer component={Paper} className="mt-5" sx={{ maxHeight: '400px', overflowY: 'auto' }}>
                                <Table>
                                    <TableHead>
                                        <TableRow className="bg-[#F3F4F6]">
                                            <TableCell>
                                                <TableSortLabel
                                                    active={sortField === "no"}
                                                    direction={sortField === "no" ? sortDirection : "asc"}
                                                    onClick={() => handleSort("no")}
                                                    hideSortIcon={false}
                                                    sx={{
                                                        '& .MuiTableSortLabel-icon': {
                                                            opacity: '1 !important',
                                                            color: '#D1D5DB '  // Warna ikon untuk non-aktif
                                                        }
                                                    }}
                                                >
                                                    <Typography
                                                        fontWeight={600}
                                                        fontSize={"12px"}
                                                        lineHeight={"18px"}
                                                        color={"#6B7280"}
                                                        className="font-poppins"
                                                    >
                                                        No
                                                    </Typography>
                                                </TableSortLabel>
                                            </TableCell>
                                            <TableCell>
                                                <TableSortLabel
                                                    active={sortField === "tanggal"}
                                                    direction={
                                                        sortField === "tanggal" ? sortDirection : "asc"
                                                    }
                                                    onClick={() => handleSort("tanggal")}
                                                    hideSortIcon={false}
                                                    sx={{
                                                        '& .MuiTableSortLabel-icon': {
                                                            opacity: '1 !important',
                                                            color: '#D1D5DB '  // Warna ikon untuk non-aktif
                                                        }
                                                    }}
                                                >
                                                    <Typography
                                                        fontWeight={600}
                                                        fontSize={"12px"}
                                                        lineHeight={"18px"}
                                                        color={"#6B7280"}
                                                        className="font-poppins"
                                                    >
                                                        Tanggal
                                                    </Typography>
                                                </TableSortLabel>
                                            </TableCell>
                                            <TableCell>
                                                <TableSortLabel
                                                    active={sortField === "tanggal_tm"}
                                                    direction={
                                                        sortField === "tanggal_tm" ? sortDirection : "asc"
                                                    }
                                                    onClick={() => handleSort("tanggal_tm")}
                                                    hideSortIcon={false}
                                                    sx={{
                                                        '& .MuiTableSortLabel-icon': {
                                                            opacity: '1 !important',
                                                            color: '#D1D5DB '  // Warna ikon untuk non-aktif
                                                        }
                                                    }}
                                                >
                                                    <Typography
                                                        fontWeight={600}
                                                        fontSize={"12px"}
                                                        lineHeight={"18px"}
                                                        color={"#6B7280"}
                                                        className="font-poppins"
                                                    >
                                                        Tanggal Tatap Muka
                                                    </Typography>
                                                </TableSortLabel>
                                            </TableCell>
                                            <TableCell>
                                                <TableSortLabel
                                                    active={sortField === "nama"}
                                                    direction={sortField === "nama" ? sortDirection : "asc"}
                                                    onClick={() => handleSort("nama")}
                                                    hideSortIcon={false}
                                                    sx={{
                                                        '& .MuiTableSortLabel-icon': {
                                                            opacity: '1 !important',
                                                            color: '#D1D5DB '  // Warna ikon untuk non-aktif
                                                        }
                                                    }}
                                                >
                                                    <Typography
                                                        fontWeight={600}
                                                        fontSize={"12px"}
                                                        lineHeight={"18px"}
                                                        color={"#6B7280"}
                                                        className="font-poppins"
                                                    >
                                                        Nama Lengkap
                                                    </Typography>
                                                </TableSortLabel>
                                            </TableCell>
                                            <TableCell>
                                                <TableSortLabel
                                                    active={sortField === "guru"}
                                                    direction={sortField === "guru" ? sortDirection : "asc"}
                                                    onClick={() => handleSort("guru")}
                                                    hideSortIcon={false}
                                                    sx={{
                                                        '& .MuiTableSortLabel-icon': {
                                                            opacity: '1 !important',
                                                            color: '#D1D5DB '  // Warna ikon untuk non-aktif
                                                        }
                                                    }}
                                                >
                                                    <Typography
                                                        fontWeight={600}
                                                        fontSize={"12px"}
                                                        lineHeight={"18px"}
                                                        color={"#6B7280"}
                                                        className="font-poppins"
                                                    >
                                                        Guru BK
                                                    </Typography>
                                                </TableSortLabel>
                                            </TableCell>
                                            <TableCell>
                                                <Typography
                                                    fontWeight={600}
                                                    fontSize={"12px"}
                                                    lineHeight={"18px"}
                                                    color={"#6B7280"}
                                                    className="font-poppins"
                                                    align="center"
                                                >
                                                    ACTION
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        <TableRow>
                                            <TableCell>1</TableCell>
                                            <TableCell>12/12/2024</TableCell>
                                            <TableCell>12/12/2024 10:00 AM</TableCell>
                                            <TableCell>Nisrina Wafa</TableCell>
                                            <TableCell>Ibu Rosemila</TableCell>
                                            <TableCell className="flex gap-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <IconButton
                                                    style={{ backgroundColor: '#1A56DB', borderRadius: '6px' }}
                                                >
                                                    <Visibility sx={{ color: 'white' }} />
                                                </IconButton>
                                                <IconButton
                                                    style={{ backgroundColor: '#C81E1E', borderRadius: '6px' }}
                                                >
                                                    <Delete sx={{ color: 'white' }} />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>1</TableCell>
                                            <TableCell>12/12/2024</TableCell>
                                            <TableCell>12/12/2024 10:00 AM</TableCell>
                                            <TableCell>Nisrina Wafa</TableCell>
                                            <TableCell>Ibu Rosemila</TableCell>
                                            <TableCell className="flex gap-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <IconButton
                                                    style={{ backgroundColor: '#1A56DB', borderRadius: '6px' }}
                                                >
                                                    <Visibility sx={{ color: 'white' }} />
                                                </IconButton>
                                                <IconButton
                                                    style={{ backgroundColor: '#C81E1E', borderRadius: '6px' }}
                                                >
                                                    <Delete sx={{ color: 'white' }} />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow><TableRow>
                                            <TableCell>1</TableCell>
                                            <TableCell>12/12/2024</TableCell>
                                            <TableCell>12/12/2024 10:00 AM</TableCell>
                                            <TableCell>Nisrina Wafa</TableCell>
                                            <TableCell>Ibu Rosemila</TableCell>
                                            <TableCell className="flex gap-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <IconButton
                                                    style={{ backgroundColor: '#1A56DB', borderRadius: '6px' }}
                                                >
                                                    <Visibility sx={{ color: 'white' }} />
                                                </IconButton>
                                                <IconButton
                                                    style={{ backgroundColor: '#C81E1E', borderRadius: '6px' }}
                                                >
                                                    <Delete sx={{ color: 'white' }} />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow><TableRow>
                                            <TableCell>1</TableCell>
                                            <TableCell>12/12/2024</TableCell>
                                            <TableCell>12/12/2024 10:00 AM</TableCell>
                                            <TableCell>Nisrina Wafa</TableCell>
                                            <TableCell>Ibu Rosemila</TableCell>
                                            <TableCell className="flex gap-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <IconButton
                                                    style={{ backgroundColor: '#1A56DB', borderRadius: '6px' }}
                                                >
                                                    <Visibility sx={{ color: 'white' }} />
                                                </IconButton>
                                                <IconButton
                                                    style={{ backgroundColor: '#C81E1E', borderRadius: '6px' }}
                                                >
                                                    <Delete sx={{ color: 'white' }} />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow><TableRow>
                                            <TableCell>1</TableCell>
                                            <TableCell>12/12/2024</TableCell>
                                            <TableCell>12/12/2024 10:00 AM</TableCell>
                                            <TableCell>Nisrina Wafa</TableCell>
                                            <TableCell>Ibu Rosemila</TableCell>
                                            <TableCell className="flex gap-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <IconButton
                                                    style={{ backgroundColor: '#1A56DB', borderRadius: '6px' }}
                                                >
                                                    <Visibility sx={{ color: 'white' }} />
                                                </IconButton>
                                                <IconButton
                                                    style={{ backgroundColor: '#C81E1E', borderRadius: '6px' }}
                                                >
                                                    <Delete sx={{ color: 'white' }} />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow><TableRow>
                                            <TableCell>1</TableCell>
                                            <TableCell>12/12/2024</TableCell>
                                            <TableCell>12/12/2024 10:00 AM</TableCell>
                                            <TableCell>Nisrina Wafa</TableCell>
                                            <TableCell>Ibu Rosemila</TableCell>
                                            <TableCell className="flex gap-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <IconButton
                                                    style={{ backgroundColor: '#1A56DB', borderRadius: '6px' }}
                                                >
                                                    <Visibility sx={{ color: 'white' }} />
                                                </IconButton>
                                                <IconButton
                                                    style={{ backgroundColor: '#C81E1E', borderRadius: '6px' }}
                                                >
                                                    <Delete sx={{ color: 'white' }} />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow><TableRow>
                                            <TableCell>1</TableCell>
                                            <TableCell>12/12/2024</TableCell>
                                            <TableCell>12/12/2024 10:00 AM</TableCell>
                                            <TableCell>Nisrina Wafa</TableCell>
                                            <TableCell>Ibu Rosemila</TableCell>
                                            <TableCell className="flex gap-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <IconButton
                                                    style={{ backgroundColor: '#1A56DB', borderRadius: '6px' }}
                                                >
                                                    <Visibility sx={{ color: 'white' }} />
                                                </IconButton>
                                                <IconButton
                                                    style={{ backgroundColor: '#C81E1E', borderRadius: '6px' }}
                                                >
                                                    <Delete sx={{ color: 'white' }} />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow><TableRow>
                                            <TableCell>1</TableCell>
                                            <TableCell>12/12/2024</TableCell>
                                            <TableCell>12/12/2024 10:00 AM</TableCell>
                                            <TableCell>Nisrina Wafa</TableCell>
                                            <TableCell>Ibu Rosemila</TableCell>
                                            <TableCell className="flex gap-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <IconButton
                                                    style={{ backgroundColor: '#1A56DB', borderRadius: '6px' }}
                                                >
                                                    <Visibility sx={{ color: 'white' }} />
                                                </IconButton>
                                                <IconButton
                                                    style={{ backgroundColor: '#C81E1E', borderRadius: '6px' }}
                                                >
                                                    <Delete sx={{ color: 'white' }} />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow><TableRow>
                                            <TableCell>1</TableCell>
                                            <TableCell>12/12/2024</TableCell>
                                            <TableCell>12/12/2024 10:00 AM</TableCell>
                                            <TableCell>Nisrina Wafa</TableCell>
                                            <TableCell>Ibu Rosemila</TableCell>
                                            <TableCell className="flex gap-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <IconButton
                                                    style={{ backgroundColor: '#1A56DB', borderRadius: '6px' }}
                                                >
                                                    <Visibility sx={{ color: 'white' }} />
                                                </IconButton>
                                                <IconButton
                                                    style={{ backgroundColor: '#C81E1E', borderRadius: '6px' }}
                                                >
                                                    <Delete sx={{ color: 'white' }} />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow><TableRow>
                                            <TableCell>1</TableCell>
                                            <TableCell>12/12/2024</TableCell>
                                            <TableCell>12/12/2024 10:00 AM</TableCell>
                                            <TableCell>Nisrina Wafa</TableCell>
                                            <TableCell>Ibu Rosemila</TableCell>
                                            <TableCell className="flex gap-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <IconButton
                                                    style={{ backgroundColor: '#1A56DB', borderRadius: '6px' }}
                                                >
                                                    <Visibility sx={{ color: 'white' }} />
                                                </IconButton>
                                                <IconButton
                                                    style={{ backgroundColor: '#C81E1E', borderRadius: '6px' }}
                                                >
                                                    <Delete sx={{ color: 'white' }} />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                        <PaginationComponent
                            params={params}
                            setParams={setParams}
                            totalData={totalData}
                            sx={{ display: 'flex', justifyContent: 'flex-end' }}
                        />
                    </Box>
                </main>
            </div>
        </div>
    );
};

export default BimbinganBelajar;
