import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import IsolIcon from "../image/IsolIcon.png";
import IsolItem from "../image/IsolItem.png";
import IsolRoute from "../image/IsolRoute.png";

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
      <h1>アイソル</h1>
      <a href="https://er.op.gg/characters/isol/AssaultRifle" target="_blank">
        <img src={IsolIcon} width="80" height="80"></img>
      </a>
      {/** ここから序盤のアイテム*/}
      <h2>序盤アイテム</h2>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>
          <p>AK-12</p>
          <img
            src="https://asatamin-eternalreturn.com/wp-content/uploads/items/117404_AK-12.png"
            width="85"
            height="60"
          ></img>
        </div>
        <div style={{ marginRight: "10px" }}>
          <p>チャンパオ</p>
          <img
            src="https://asatamin-eternalreturn.com/wp-content/uploads/items/202420_%E3%83%81%E3%83%A3%E3%83%B3%E3%83%91%E3%82%AA.png"
            width="85"
            height="60"
          ></img>
        </div>
        <div style={{ marginRight: "10px" }}>
          <p>水晶ティアラ</p>
          <img
            src="https://asatamin-eternalreturn.com/wp-content/uploads/items/201404_%E6%B0%B4%E6%99%B6%E3%83%86%E3%82%A3%E3%82%A2%E3%83%A9.png"
            width="85"
            height="60"
          ></img>
        </div>
        <div style={{ marginRight: "10px" }}>
          <p>プラズマアーク</p>
          <img
            src="https://asatamin-eternalreturn.com/wp-content/uploads/items/203412_%E3%83%97%E3%83%AC%E3%82%BA%E3%83%9E%E3%82%A2%E3%83%BC%E3%82%AF.png"
            width="85"
            height="60"
          ></img>
        </div>
        <div style={{ marginRight: "10px" }}>
          <p>ブケパロス</p>
          <img
            src="https://asatamin-eternalreturn.com/wp-content/uploads/items/204408_%E3%83%96%E3%82%B1%E3%83%91%E3%83%AD%E3%82%B9.png"
            width="85"
            height="60"
          ></img>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <img src={IsolRoute} />
        </div>
        <div>
          <img src={IsolItem} />
          <p style={{ color: "red", fontSize: 20 }}>
            ※マペは浜辺でも拾えるのでスルーしてもOK
          </p>
        </div>
      </div>
      {/**ここまで序盤アイテム */}
      <h2>スキルパス</h2>
      <p>T.Q.W.E</p>
      <h2>特性</h2>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "30px" }}>
          <p>
            <h3 style={{ color: "blue" }}>コア</h3>
          </p>
          <img
            src="https://asatamin-eternalreturn.com/wp-content/uploads/2022/08/%E3%82%A2%E3%83%89%E3%83%AC%E3%83%8A%E3%83%AA%E3%83%B3.png"
            width="100"
            height="100"
            style={{ marginRight: "5px" }}
          ></img>
          <img
            src="https://asatamin-eternalreturn.com/wp-content/uploads/2021/10/%E5%BE%B9%E7%94%B2%E5%BC%BE.png"
            width="50"
            height="50"
            style={{ marginRight: "5px" }}
          ></img>
          <img
            src="https://asatamin-eternalreturn.com/wp-content/uploads/2021/10/%E5%8A%A3%E5%8B%A2%E5%85%8B%E6%9C%8D.png"
            width="50"
            height="50"
          ></img>
        </div>
        <div>
          <p>
            <h3 style={{ color: "green" }}>サブコア</h3>
          </p>
          <img
            src="https://asatamin-eternalreturn.com/wp-content/uploads/2021/10/%E5%B8%82%E8%A1%97%E6%88%A6.png"
            width="50"
            height="50"
            style={{ marginRight: "5px", marginTop: "50px" }}
          ></img>
          <img
            src="https://asatamin-eternalreturn.com/wp-content/uploads/2022/08/%E5%89%B2%E5%BC%95%E5%88%B8.png"
            width="50"
            height="50"
            style={{ marginRight: "5px" }}
          ></img>
        </div>
      </div>
      <h2>後半アイテム</h2>
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
      <a href="#top">
        <ArrowUpwardIcon
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "50",
            height: "50",
            backgroundColor: "gray",
            color: "black",
          }}
        >
          トップへ戻る
        </ArrowUpwardIcon>
      </a>
    </>
  );
}

export default EternalReturnAsariPage;
