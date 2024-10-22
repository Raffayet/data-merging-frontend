import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#0038b8",
        },
        secondary: {
            main: "#f50057",
        },
        background: {
            default: "#f0f0f0", // Light gray background globally
            paper: "#ffffff", // Background for paper components, modals, etc.
        },
        text: {
            primary: "#ffffff",
        },
    },
    typography: {
        fontFamily: "'Quicksand', sans-serif",
    },
});

export default theme;
