import { MenuRounded } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        className="navBar"
        sx={{
          display: { xs: "none", lg: "flex" },
          padding: 5,
          px: 20,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            <Link id="self" to="/home">
              Personal
            </Link>
          </Typography>
        </Box>
        <Box sx={{ fontWeight: 500 }}>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About Me</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/resume" target="_blank">
            Resume
          </Link>
          <Link to="/contact">Contact Me</Link>
        </Box>
      </Box>

      {/* Button Menu */}
      <Box
        className="navBarMini"
        sx={{
          display: { xs: "flex", lg: "none" },
          justifyContent: "flex-end",
          position: "fixed",
          right: 30,
          top: 30,
        }}
      >
        <Tooltip title="Menu">
          <IconButton onClick={handleClick} size="small">
            <MenuRounded
              sx={{
                width: 32,
                height: 32,
                background: "rgba(238, 238, 238, 0.5)",
                borderRadius: "5px",
                border: "3px solid rgba(209, 213, 219, 0.3)",
              }}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        className="navBarMini"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/projects">Projects</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about">About Me</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/blog">Blog</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/resume" target="_blank">
            Resume
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">Contact Me</Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
