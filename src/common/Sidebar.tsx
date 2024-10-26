import { Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RouteType } from "../model/routeType";

interface Props {
    routes: RouteType[];
}
//gdsahgashs
const Sidebar = (props: Props) => {
    const theme = useTheme();

    // State to track which route is hovered
    const [hoveredLinkId, setHoveredLinkId] = useState<string | null>(null);
    const [isSidebarHovered, setIsSidebarHovered] = useState(false);

    const handleSidebarMouseEnter = () => {
        setIsSidebarHovered(true);
    };

    const handleSidebarMouseLeave = () => {
        setIsSidebarHovered(false);
    };

    const handleLinkEnter = (id: string) => {
        setHoveredLinkId(id);
    };

    const handleLinkLeave = () => {
        setHoveredLinkId(null);
    };

    const renderLinks = () => {
        return props.routes
            .filter((route) => route.sidebarShow === true) // Filter routes correctly
            .map((route) => (
                <Link
                    key={route.id} // Ensure each link has a unique key
                    to={route.path}
                    style={{
                        textDecoration: "none",
                        color: theme.palette.background.paper,
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        paddingTop: "5vh", // Keep padding consistent
                        paddingBottom: "5vh",
                        height: "5vh", // Fix height to avoid shifts
                        backgroundColor: theme.palette.primary.main,
                    }}
                    onMouseEnter={() => handleLinkEnter(route.id)}
                    onMouseLeave={handleLinkLeave}
                >
                    {route.icon}
                    <Typography
                        variant="body1"
                        sx={{
                            transition: "opacity 0.2s ease",
                            opacity: isSidebarHovered ? 1 : 0, // Show text only when sidebar is hovered
                            color: theme.palette.background.paper,
                        }}
                        className="sidebar-text"
                    >
                        {route.id} {/* Dynamically show the route name */}
                    </Typography>
                </Link>
            ));
    };

    return (
        <Stack
            sx={{
                backgroundColor: theme.palette.primary.main,
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                width: 80, // Default smaller width
                zIndex: 10,
                transition: "width 0.2s ease", // Smooth width transition
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                alignItems: "flex-start",
                paddingTop: "12px",
                paddingBottom: "16px",
                justifyContent: "flex-start",
                paddingLeft: "8px",
                paddingRight: "8px",
                "&:hover": {
                    width: 280, // Expanded width when hovered
                },
            }}
            onMouseEnter={handleSidebarMouseEnter}
            onMouseLeave={handleSidebarMouseLeave}
        >
            {renderLinks()}
        </Stack>
    );
};

export default Sidebar;
