import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  FormGroup,
  FormControlLabel,
  Switch,
  Toolbar,
} from "@mui/material";
import { signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../lib/firebase";
import { MaterialUISwitch } from "./Switch";

export const Navbar = () => {
  const { currentUser, setDarkMode } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await auth.signOut().then(() => navigate("/"));
  };

  return (
    <AppBar position="sticky" color="inherit">
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingY: 1.2,
          }}
        >
          <Typography
            onClick={() => navigate("/hotels")}
            sx={{ cursor: "pointer" }}
            variant="h6"
            color="inherit"
            component="div"
            fontWeight={"bold"}
          >
            BookStay
          </Typography>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <FormGroup sx={{ display: { xs: "none", md: "flex" } }}>
              <FormControlLabel
                control={
                  <MaterialUISwitch
                    onChange={() => setDarkMode((prev) => !prev)}
                  />
                }
              />
            </FormGroup>

            <Typography
              onClick={() => setDarkMode((prev) => !prev)}
              sx={{ display: { xs: "block", md: "none" }, cursor: "pointer" }}
              fontSize={15}
              variant="h6"
              color="inherit"
              component="a"
            >
              DarkMode
            </Typography>
            <Typography
              onClick={() => navigate("/hotels")}
              sx={{ cursor: "pointer" }}
              fontSize={15}
              variant="h6"
              color="inherit"
              component="a"
            >
              Home
            </Typography>

            <IconButton
              id="demo-positioned-menu"
              onClick={handleClick}
              size="small"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                src={currentUser?.photoURL}
                sx={{ width: 32, height: 32 }}
              />
            </IconButton>
          </Box>
        </Toolbar>

        <div>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem
              onClick={() => {
                navigate("/my-profile");
                handleClose;
              }}
            >
              My Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </Container>
    </AppBar>
  );
};
