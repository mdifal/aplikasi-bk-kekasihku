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
    TextField,
} from "@mui/material";
import { Visibility, Delete } from "@mui/icons-material";
import Navbar from "../../../../components/Navbar";
import Sidebar from "../../../../components/Sidebar";
import PaginationComponent from "../../../../components/Pagination"
import { SelectSmall, SelectNoLabel, DatePickerSmall } from "../../../../components/Select";
import { TextInputSearch } from "../../../../components/TextField";

const KonselingIndividu = () => {
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

    //search
    const [searchBy, setSearchBy] = useState("tgl");
    const itemsSearchBy = [
        { value: 'tgl', name: "Tanggal" },
        { value: 'tgl_tm', name: "Tanggal Tatap Muka" },
        { value: 'nama', name: "Nama Lengkap" },
        { value: 'guru_bk', name: "Nama Guru BK" },
    ];
    const itemsGuruBk = [
        { value: 1, name: "Rosemila Amalia, S.Pd" },
        { value: 2, name: "Pathah Pajar Mubarok, M.Pd" }
    ];

    const [searchTemp, setSearchTemp] = useState("");

    const handleChangeSearchBy = (value) => {
        setSearchBy(value);
        setSearchTemp('')
        // if (event.target.value === 'default') {
        //   setFilter({ ...filter, search: "", mark_as_read: false, page: 0 });
        //   setShouldFetch(true)
        // }
    };

    const handleChangeTanggal = (value) => {
        const formattedDate = value ? value.format('YYYY-MM-DD') : '';
        setSearchTemp(formattedDate);
    };

    const handleChangeTanggalTatapMuka = (value) => {
        const formattedDate = value ? value.format('YYYY-MM-DD') : '';
        setSearchTemp(formattedDate);
    };

    const handleChangeNama = (value) => {
        setSearchTemp(value);
    };

    const handleChangeGuruBk = (value) => {
        setSearchTemp(value);
    };

    return (
        <div className="flex h-full bg-[#EEEEEE]" >
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
                                Konseling Individu
                            </Typography>
                            <hr className="border border-[#9F5BC2] my-1 w-[45%]" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-x-5 gap-y-3 items-center mt-10">
                            <SelectSmall label="Search by"
                                initialValue={searchBy}
                                items={itemsSearchBy}
                                onChange={handleChangeSearchBy}></SelectSmall>
                            {searchBy === 'guru_bk' ? (<SelectNoLabel label="Guru BK"
                                items={itemsGuruBk}
                                onChange={handleChangeGuruBk}></SelectNoLabel>)
                                : (searchBy === 'tgl_tm' ? (<DatePickerSmall onChange={handleChangeTanggalTatapMuka} ></DatePickerSmall>)
                                    : (searchBy === "nama" ? (<TextInputSearch
                                        placeholder="Masukkan Nama Lengkap"
                                        onChange={handleChangeNama}
                                        onKeyDown={(e) => {
                                            if (e.keyCode === 13) {
                                                handleChangeNama(e);
                                            }
                                        }}
                                    />)
                                        : <DatePickerSmall onChange={handleChangeTanggal}></DatePickerSmall>))}
                        </div>

                        <div style={{ flexGrow: 1 }}>
                            <TableContainer component={Paper} className="mt-5">
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
                                                        NO
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
                                                        TANGGAL
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
                                                        TANGGAL TATAP MUKA
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
                                                        NAMA LENGKAP
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
                                                        NAMA GURU BK
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

export default KonselingIndividu;
