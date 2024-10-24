import { Dataset } from "@mui/icons-material";
import BusinessIcon from "@mui/icons-material/Business";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import HistoryIcon from "@mui/icons-material/History";
import HomeIcon from "@mui/icons-material/Home";
import MergeTypeIcon from "@mui/icons-material/MergeType";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./common/Sidebar";
import Datasets from "./components/Datasets";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
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
        element: <NotFound />,
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
        element: <NotFound />,
        icon: (
            <FileDownloadIcon
                sx={{ ml: 2, mr: 2, width: 30, height: 30 }}
            ></FileDownloadIcon>
        ),
        sidebarShow: true,
    },
    {
        id: "Datasets",
        path: "/datasets",
        element: <Datasets />,
        icon: (
            <Dataset
                sx={{
                    ml: 2,
                    mr: 2,
                    width: 30,
                    height: 30,
                }}
            ></Dataset>
        ),
        sidebarShow: true,
    },
    {
        id: "Merge Suggestions",
        path: "/merge-suggestions",
        element: <NotFound />,
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
        element: <NotFound />,
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
    {
        id: "Organizations",
        path: "/organizations",
        element: <NotFound />,
        icon: (
            <BusinessIcon
                sx={{
                    ml: 2,
                    mr: 2,
                    width: 30,
                    height: 30,
                }}
            ></BusinessIcon>
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
                    {/* Sidebar with fixed width */}
                    <Box
                        component="nav"
                        sx={{
                            width: 80, // Set fixed width for sidebar
                            flexShrink: 0, // Prevent sidebar from shrinking
                        }}
                    >
                        <Sidebar routes={routes} />
                    </Box>

                    {/* Main content (Routes) */}
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1, // Grow to take remaining space
                            p: 3,
                        }}
                    >
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
