"use client";
import { auth } from "@/utils/firebase";
import {
  EditRounded,
  Logout,
  Person,
  PersonAdd,
  Settings,
} from "@mui/icons-material";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const user = useSelector((store) => store.user);
  console.log(user);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        // An error happened.
      });
    handleClose();
  };
  return (
    <div>
      <div className="flex items-center justify-between w-full p-8">
        <Image src={"/netflixLogo.png"} width={150} height={50} alt="logo" />
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }}>
            {user?.displayName?.charAt(0)}
          </Avatar>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                backgroundColor: "#0a0a0a",
                color: "#b5b3b3",
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                  color: "#565656",
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "#0a0a0a",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" sx={{ color: "#b5b3b3" }} />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <EditRounded fontSize="small" sx={{ color: "#b5b3b3" }} />
            </ListItemIcon>{" "}
            Manage Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Person fontSize="small" sx={{ color: "#b5b3b3" }} />
            </ListItemIcon>{" "}
            My account
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" sx={{ color: "#b5b3b3" }} />
            </ListItemIcon>
            Settings
          </MenuItem>
          <Divider sx={{ borderColor: "#ededed52" }} />
          <MenuItem onClick={handleSignOut}>
            <ListItemIcon>
              <Logout fontSize="small" sx={{ color: "#b5b3b3" }} />
            </ListItemIcon>
            Sign out of Netflix ?
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
