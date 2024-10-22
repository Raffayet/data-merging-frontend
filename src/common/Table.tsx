import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Profile } from "../model/profile";
import theme from "../theme/theme";

interface Props {
    data: any;
}

// Table width: 1176
const columns: GridColDef[] = [
    { field: "first_name", headerName: "First name", width: 200 },
    { field: "last_name", headerName: "Last name", width: 200 },
    { field: "email", headerName: "Email", width: 230 },
    { field: "phone_number", headerName: "Phone number", width: 170 },
    { field: "address", headerName: "Address", width: 376 },
    // {
    //     field: "fullName",
    //     headerName: "Full name",
    //     description: "This column has a value getter and is not sortable.",
    //     sortable: false,
    //     width: 200,
    //     valueGetter: (value, row) =>
    //         `${row.firstName || ""} ${row.lastName || ""}`,
    // },
];

const rows: Profile[] = [
    { id: "1", lastName: "fadsgdasdsa", first_name: "Jon" },
    { id: "2", lastName: "Lannister", first_name: "Cersei" },
    { id: "3", lastName: "Lannister", first_name: "Jaime" },
    { id: "4", lastName: "Stark", first_name: "Arya" },
    { id: "5", lastName: "Targaryen", first_name: "Daenerys" },
    { id: "6", lastName: "Melisandre", first_name: "gdsaghas" },
    { id: "7", lastName: "Clifford", first_name: "Ferrara" },
    { id: "8", lastName: "Frances", first_name: "Rossini" },
    { id: "9", lastName: "Roxie", first_name: "Harvey" },
];

const paginationModel = { page: 1, pageSize: 10 };

export default function DataTable(props: Props) {
    return (
        <Paper
            sx={{
                height: "100%",
                width: "80%",
                backgroundColor: theme.palette.background.default,
                mt: 10,
            }}
        >
            <Box
                sx={{
                    mb: 2,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ color: theme.palette.primary.main }}
                >
                    Profiles
                </Typography>
            </Box>

            <DataGrid
                rows={props.data}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10, 20, 100]}
                checkboxSelection
                sx={{
                    width: "100%",
                    border: 0,
                    backgroundColor: "white",
                    color: theme.palette.secondary.main,
                    // Custom styles for header
                    "& .MuiDataGrid-columnHeaders": {
                        color: "white", // Change header text color
                        fontSize: "1.1rem", // Change header font size
                    },
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: `${theme.palette.primary.main} !important`,
                    },
                    // Custom styles for footer
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: theme.palette.background.paper, // Change footer background color
                        color: "black", // Change footer text color
                    },
                    "& .MuiTablePagination-root": {
                        color: "black", // Pagination text color
                    },
                    "& .MuiSelect-select": {
                        color: "black", // Change dropdown selected text color to black
                    },
                    // Modify the dropdown menu item's text color from white to black
                    "& .MuiMenuItem-root": {
                        color: "black", // Ensure dropdown items are black
                    },
                    // Modify background and text color of dropdown menu
                    // TODO - MODIFY FROM WHITE TO BLACK
                    "& .MuiPaper-root": {
                        backgroundColor: "white", // Ensure the background of dropdown is white
                        color: "black", // Ensure the text color is black
                    },
                }}
            />
        </Paper>
    );
}
