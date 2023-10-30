import React from "react";
import kai from "../image/kai.jpg";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
function KaiPage(props) {
  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  };

  // props
  const { setPage } = props;
  return (
    <>
      <div style={{ position: "absolute", top: "10%", left: "2%" }}>
        <Button
          variant="contained"
          onClick={() => {
            setPage("Top");
          }}
        >
          Top
        </Button>
      </div>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography>{"Kai Page"}</Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column" /* 縦方向に配置 */,
            justifyContent: "center" /* 垂直方向に中央揃え */,
            alignItems: "center" /* 水平方向に中央揃え */,
            flex: 1,
            width: "50%",
            textAlign: "center",
            height: "90vh",
          }}
        >
          <img src={kai} alt="kai" style={{ width: "70%" }} />
        </div>
        <div
          style={{
            flex: 1,
            marginTop: "5%",
            fontFamily: "'Sacramento', cursive",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <List
            sx={style}
            component="nav"
            aria-label="mailbox folders"
            style={{ marginRight: "60%" }}
          >
            <ListItem>
              <p style={{ fontSize: 32, fontWeight: 800 }}>名前：Kai</p>
            </ListItem>
            <Divider />
            <ListItem>
              <p style={{ fontSize: 16 }}>出身：Fukuoka</p>
            </ListItem>
            <Divider />
            <ListItem>
              <p style={{ fontSize: 16 }}>趣味：painter・game</p>
            </ListItem>
            <Divider />
            <ListItem>
              <p style={{ fontSize: 16 }}>職業：engineer</p>
            </ListItem>
            <Divider />
            <ListItem>
              <p style={{ fontSize: 16 }}>好きなゲームジャンル：RPG・FPS</p>
            </ListItem>
            <Divider />
            <ListItem>
              <p style={{ fontSize: 16 }}>好きな食べ物：garlic</p>
            </ListItem>
          </List>
        </div>
      </div>
    </>
  );
}

export default KaiPage;
