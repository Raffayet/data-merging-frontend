import { Box } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import DataTable from "../common/Table";
import { Profile } from "../model/profile";
import { ProfileService } from "../service/profile.service";

// Table total width: 1350px
const columns: GridColDef[] = [
    { field: "first_name", headerName: "First name" },
    { field: "last_name", headerName: "Last name" },
    { field: "email", headerName: "Email" },
    { field: "phone_number", headerName: "Phone number" },
    { field: "address", headerName: "Address" },
];

const Profiles = () => {
    const [profiles, setProfiles] = useState<Profile[]>();

    useEffect(() => {
        fetchProfiles();
    }, []);

    const fetchProfiles = () => {
        ProfileService.getAllProfiles().then((res) => {
            setProfiles(res);
        });
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <DataTable data={profiles} columns={columns} />
        </Box>
    );
};

export default Profiles;
