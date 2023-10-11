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
import EternalReturnLogo from "../image/EternalReturnLogo.jpg";
import LeagueOfLegendsLogo from "../image/LeagueOfLegendsLogo.jpg";
function AsariPage(props) {
  const { setPage } = props;
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
      <img
        src={EternalReturnLogo}
        onClick={() => {
          setPage("EternalReturnAsariPage");
        }}
      ></img>
      <img
        src={LeagueOfLegendsLogo}
        onClick={() => {
          setPage("LolAsariPage");
        }}
        width="55"
        height="38"
      ></img>
      <p>
        <Button
          variant="contained"
          disableElevation
          onClick={() => {
            setPage("Top");
          }}
        >
          Top
        </Button>
      </p>
    </>
  );
}

export default AsariPage;
