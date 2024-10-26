import { Box, Typography } from "@mui/material";
import theme from "../theme/theme";

const NotFound = () => {
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
                In progress :)
            </Typography>
        </Box>
    );
};

export default NotFound;
