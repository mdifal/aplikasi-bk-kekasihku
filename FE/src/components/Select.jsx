import React from "react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    IconButton,
} from "@mui/material";
import { ClearIcon, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useState } from "react";

export const SelectSmall = ({ label, items, initialValue, onChange }) => {
    const [temp, setTemp] = useState(initialValue);
    const handleChange = (event) => {
        setTemp(event.target.value);
        onChange(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, width: { xs: '100%', md: '250px' } }} size="small">
            <InputLabel id="demo-simple-select-label" shrink={Boolean(temp)}>{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Search By"
                value={temp}
                onChange={handleChange}
                sx={{
                    backgroundColor: 'white',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'rgba(0, 0, 0, 0.23)',
                        },
                        '&:hover fieldset': {
                            borderColor: 'rgba(0, 0, 0, 0.87)',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'rgba(0, 0, 0, 0.87)',
                        },
                    },
                }}
            >
                {items.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                        {item.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export const SelectNoLabel = ({ label, items, onChange }) => {
    const [temp, setTemp] = useState("");
    const handleChange = (event) => {
        setTemp(event.target.value);
        onChange(event.target.value);
    };
    return (
        <FormControl sx={{ m: 1, width: { xs: '100%', md: '250px' } }} size="small">
            <InputLabel htmlFor="custom-select" shrink={false} sx={{ display: temp ? 'none' : 'block' }}>
                {label}
            </InputLabel><Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={temp}
                onChange={handleChange}
                sx={{
                    backgroundColor: 'white',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'rgba(0, 0, 0, 0.23)',
                        },
                        '&:hover fieldset': {
                            borderColor: 'rgba(0, 0, 0, 0.87)',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'rgba(0, 0, 0, 0.87)',
                        },
                    },
                }}
            >
                {items.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                        {item.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export const DatePickerSmall = ({ onChange }) => {
  const [tanggal, setTanggal] = useState(null); // Menggunakan null untuk inisialisasi

  const handleChange = (value) => {
    setTanggal(value); // Menyimpan nilai yang dipilih
    onChange(value); // Mengirimkan nilai ke parent
  };

  const handleClear = () => {
    setTanggal(null); // Reset tanggal ke null
    onChange(null); // Mengirimkan null ke parent
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '40px',
          padding: '0px 6px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
        className="w-full md:w-[250px]"
      >
        <DatePicker
          value={tanggal ? dayjs(tanggal) : null} // Menangani null dengan baik
          onChange={handleChange} // Mengirim nilai baru ke parent
          slotProps={{
            textField: {
              variant: 'outlined',
              width:'100%',
              sx: {
                width: '100%',
                '& .MuiInputBase-input': {
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                  },
                  '&:hover fieldset': {
                    border: 'none',
                  },
                  '&.Mui-focused fieldset': {
                    border: 'none',
                  },
                },
              },
            },
          }}
        />
        {tanggal && <IconButton onClick={handleClear} style={{ marginLeft: '8px' }}>
          <ClearIcon />
        </IconButton>}
      </div>
    </LocalizationProvider>
  );
};
