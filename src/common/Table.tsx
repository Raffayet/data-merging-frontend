import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import theme from "../theme/theme";

interface Props {
    data: any;
    columns: GridColDef[];
    title: string;
}

const paginationModel = { page: 1, pageSize: 10 };

export default function DataTable(props: Props) {
    return (
        <Paper
            sx={{
                height: "100%",
                width: "100%",
                backgroundColor: theme.palette.background.default,
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
                    {props.title}
                </Typography>
            </Box>

            {props.columns &&
            props.data &&
            props.data.length > 0 &&
            props.columns.length > 0 ? (
                <DataGrid
                    rows={props.data}
                    columns={props.columns.map((column) => ({
                        ...column,
                        flex: column.flex || 1, // Use the flex property to scale columns
                    }))}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10, 20, 100]}
                    checkboxSelection
                    rowHeight={60} // Set row height here (in pixels)
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
            ) : (
                <p>Loading...</p>
            )}
        </Paper>
    );
}
