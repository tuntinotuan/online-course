import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import LogoUdemyDark from "../../components/logo/LogoUdemyDark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
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
  return (
    <Box sx={{ display: "flex", height: "100vh" }} className="sticky top-0">
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
        <Paper elevation={0} sx={{ maxWidth: 256 }} className="!rounded-none">
          <AdminSidebarStyles component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <LogoUdemyDark></LogoUdemyDark>
            </ListItemButton>
            <Divider />
            <Box
              sx={{
                bgcolor: "rgba(71, 98, 130, 0.2)",
              }}
            >
              {data.map((item) => (
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    isActive ? "block bg-[rgba(255,255,255,.2)]" : ""
                  }
                >
                  <ListItemButton
                    key={item.label}
                    sx={{
                      py: 0,
                      minHeight: 52,
                      width: 250,
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
