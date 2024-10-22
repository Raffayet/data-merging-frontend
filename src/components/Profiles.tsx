import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import DataTable from "../common/Table";
import { Profile } from "../model/profile";
import { ProfileService } from "../service/profile.service";

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
        <Box>
            <DataTable data={profiles} />
        </Box>
    );
};

export default Profiles;
