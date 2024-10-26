import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Home = () => {
    const theme = useTheme(); // Hook to access the theme

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "20vh",
                textAlign: "center",
            }}
        >
            <Typography
                variant="h4"
                sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
            >
                {" "}
                {/* Implicit color from theme */}
                Data Merging Tool
            </Typography>
        </Box>
    );
};

export default Home;
