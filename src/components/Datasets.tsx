import { Box } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import DataTable from "../common/Table";
import { DatasetService } from "../service/dataset.service";

// Table total width: 1350px
// const columns: GridColDef[] = [
//     { field: "first_name", headerName: "First name" },
//     { field: "last_name", headerName: "Last name" },
//     { field: "email", headerName: "Email" },
//     { field: "phone_number", headerName: "Phone number" },
//     { field: "address", headerName: "Address" },
// ];

const Datasets = () => {
    const [tableData, setTableData] = useState<any[]>();
    const [columns, setColumns] = useState<GridColDef[]>([]);

    useEffect(() => {
        fetchDataset();
    }, []);

    const fetchDataset = async () => {
        try {
            const res = await DatasetService.getAllDatasets();
            const dataset = res[0] as any;
            const firstRow = (res[0] as any).content[0];

            // Dynamically generate columns using values instead of keys
            const columns = Object.keys(firstRow || {}).map(
                (key: any, index: number) => {
                    const value = firstRow[key];

                    return {
                        field: key,
                        headerName: value.Key, // Modify this based on your needs (use key or key.Key if applicable)
                        flex: 1, // Adjust width based on table total width
                        key: `col-${index}`, // Unique key for each column
                    };
                }
            );

            setColumns(columns);

            // Ensure proper mapping if necessary
            const data = dataset.content.map((item: any, index: number) => {
                return {
                    ...item.map((field: any) => field.Value),
                    id: index, // Adding a unique id for each dataset row
                };
            });

            setTableData(data);
        } catch (error) {
            console.error("Error fetching dataset:", error);
        }
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <DataTable data={tableData} columns={columns} title="Datasets" />
        </Box>
    );
};

export default Datasets;
