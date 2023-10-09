import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import errogo from "../image/errogo.jpg";
export default function AsariPage() {
  return (
    <>
      <div>
        <Box>
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
              <Typography>Profile</Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <font size="5">
        <p>name:asari</p>
        <p>age:19</p>
      </font>
      <img src={errogo}></img>
      <p>
        <Button variant="contained" disableElevation>
          Top
        </Button>
      </p>
    </>
  );
}
