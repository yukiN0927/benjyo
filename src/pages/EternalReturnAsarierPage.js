import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IsolIcon from "../image/IsolIcon.png";

function EternalReturnAsariPage(props) {
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
              <Typography>EternalReturn</Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <p>アイソル</p>
      <a href="https://er.op.gg/characters/isol/AssaultRifle" target="_blank">
        <img src={IsolIcon} width="80" height="80"></img>
      </a>
      <h2>アイテム</h2>
      <div style={{ display: "flex" }}>
        <div>
          <p>AK-12</p>
          <img
            src="https://asatamin-eternalreturn.com/wp-content/uploads/items/117404_AK-12.png"
            width="80"
            height="60"
          ></img>
        </div>
        <div>
          <p>チャンパオ</p>
          <img
            src="https://asatamin-eternalreturn.com/wp-content/uploads/items/202420_%E3%83%81%E3%83%A3%E3%83%B3%E3%83%91%E3%82%AA.png"
            width="80"
            height="60"
          ></img>
        </div>
      </div>
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

export default EternalReturnAsariPage;
