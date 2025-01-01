import React from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Box, FormControl, InputLabel, MenuItem, Pagination, Select } from "@mui/material";

const PaginationComponent = ({ params, setParams, totalData }) => {
    const handleChangePage = (event, value) => {
        //setParams({ ...params, page: String(value) });
    };

    const changePageSize = (e) => {
        //setParams({ ...params, size: String(e.target.value), page: "1" });
    };

    return (
        <div className="flex justify-between items-center mt-4 flex-col md:flex-row gap-y-6">
            <div className="flex items-center gap-2">
                <span>Items per page</span>
                <FormControl style={{ minWidth: 75 }}>
                    <Select
                        labelId="page-size-select-label"
                        id="page-size-select"
                        value={params.size}
                        onChange={changePageSize}
                        IconComponent={ExpandMoreIcon}
                        size="small"
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                    </Select>
                </FormControl>
                <span className="ml-5">
                    Showing{" "}
                    <b>{Number(params.size) * (Number(params.page) - 1) + 1}</b> to{" "}
                    <b>{Math.min(Number(params.size) * Number(params.page), totalData)}</b>{" "}
                    of <b>{totalData}</b> Entries
                </span>
            </div>
            <Pagination
                count={Math.ceil(totalData / Number(params.size))}
                page={Number(params.page)}
                onChange={handleChangePage}
                color="primary"
            />
        </div>
    );
};

export default PaginationComponent;
