import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import LogoUdemyDark from "../../components/logo/LogoUdemyDark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const data = [
  { icon: <Dns />, label: "Dashboard", url: "/admin/dashboard" },
  { icon: <People />, label: "User", url: "/admin/user" },
  { icon: <PlayLessonIcon />, label: "Course", url: "/admin/course" },
  { icon: <PermMedia />, label: "Category", url: "/admin/category" },
  { icon: <ShoppingCartIcon />, label: "Cart", url: "/admin/cart" },
  { icon: <FavoriteIcon />, label: "Wishlist", url: "/admin/wishlist" },
  { icon: <ThumbsUpDownIcon />, label: "Review", url: "/admin/review" },
];

const AdminSidebarStyles = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

function AdminSidebar() {
  const [open, setOpen] = useState(true);
  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: "dark",
            primary: { main: "rgb(102, 157, 246)" },
            background: { paper: "rgb(5, 30, 52)" },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <AdminSidebarStyles component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <LogoUdemyDark></LogoUdemyDark>
            </ListItemButton>
            <Divider />
            <Box
              sx={{
                bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                pb: open ? 2 : 0,
                height: "100vh",
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="Build"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    mb: "2px",
                  }}
                  secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: open ? "rotate(-180deg)" : "rotate(0)",
                    transition: "0.2s",
                  }}
                />
              </ListItemButton>
              {open &&
                data.map((item) => (
                  <NavLink to={item.url}>
                    <ListItemButton
                      key={item.label}
                      sx={{
                        py: 0,
                        minHeight: 52,
                        color: "rgba(255,255,255,.8)",
                      }}
                    >
                      <ListItemIcon sx={{ color: "inherit" }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: "medium",
                        }}
                      />
                    </ListItemButton>
                  </NavLink>
                ))}
            </Box>
          </AdminSidebarStyles>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}

export default AdminSidebar;
