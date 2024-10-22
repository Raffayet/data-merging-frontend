import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import HistoryIcon from "@mui/icons-material/History";
import HomeIcon from "@mui/icons-material/Home";
import MergeTypeIcon from "@mui/icons-material/MergeType";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./common/Sidebar";
import Home from "./components/Home";
import Profiles from "./components/Profiles";
import { RouteType } from "./model/routeType";
import theme from "./theme/theme";

const routes: RouteType[] = [
    {
        id: "Home",
        path: "/",
        element: <Home />,
        icon: (
            <HomeIcon sx={{ ml: 2, mr: 2, width: 30, height: 30 }}></HomeIcon>
        ),
        sidebarShow: true,
    },
    {
        id: "Data Import",
        path: "/data-import",
        element: <Profiles />,
        icon: (
            <FileUploadIcon
                sx={{ ml: 2, mr: 2, width: 30, height: 30 }}
            ></FileUploadIcon>
        ),
        sidebarShow: true,
    },
    {
        id: "Data Export",
        path: "/data-export",
        element: <Profiles />,
        icon: (
            <FileDownloadIcon
                sx={{ ml: 2, mr: 2, width: 30, height: 30 }}
            ></FileDownloadIcon>
        ),
        sidebarShow: true,
    },
    {
        id: "Profiles",
        path: "/profiles",
        element: <Profiles />,
        icon: (
            <PeopleAltIcon
                sx={{
                    ml: 2,
                    mr: 2,
                    width: 30,
                    height: 30,
                }}
            ></PeopleAltIcon>
        ),
        sidebarShow: true,
    },
    {
        id: "Merge Suggestions",
        path: "/merge-suggestions",
        element: <Profiles />,
        icon: (
            <MergeTypeIcon
                sx={{
                    ml: 2,
                    mr: 2,
                    width: 30,
                    height: 30,
                }}
            ></MergeTypeIcon>
        ),
        sidebarShow: true,
    },
    {
        id: "Merge History",
        path: "/merge-history",
        element: <Profiles />,
        icon: (
            <HistoryIcon
                sx={{
                    ml: 2,
                    mr: 2,
                    width: 30,
                    height: 30,
                }}
            ></HistoryIcon>
        ),
        sidebarShow: true,
    },
];

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                {/* Wrap content in a Box container for layout */}
                <Box display="flex">
                    {/* Sidebar */}
                    <Sidebar routes={routes} />

                    {/* Main content (Routes) */}
                    <Box flexGrow={1} p={3}>
                        {" "}
                        {/* Grow to take remaining space */}
                        <Routes>
                            {routes.map((route) => (
                                <Route
                                    key={route.id}
                                    path={route.path}
                                    element={route.element}
                                />
                            ))}
                        </Routes>
                    </Box>
                </Box>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
