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
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>
          <p>ジャッジメント</p>
          <img
            src="https://asatamin-eternalreturn.com/wp-content/uploads/items/117406_%E3%82%B8%E3%83%A3%E3%83%83%E3%82%B8%E3%83%A1%E3%83%B3%E3%83%88.png"
            width="85"
            height="60"
          ></img>
        </div>
        <div style={{ marginRight: "10px" }}>
          <p>仙女の降臨</p>
          <img
            src="https://cdn.playeternalreturn.com/2023%2F03%2F01%2F1677644078715-Beautiful+Garnment_%EC%84%A0%EB%85%80%EA%B0%95%EB%A6%BC.png"
            width="85"
            height="60"
          ></img>
        </div>
        <div style={{ marginRight: "10px" }}>
          <p>光の証票</p>
          <img
            src="https://asatamin-eternalreturn.com/wp-content/uploads/items/201502_%E5%85%89%E3%81%AE%E8%A8%BC%E7%A5%A8.png"
            width="85"
            height="60"
          ></img>
        </div>
        <div style={{ marginRight: "10px" }}>
          <p>トゲトゲチェーン</p>
          <img
            src="https://cdn.playeternalreturn.com/2023%2F04%2F12%2F1681269700506-%5B203511%5D+Chain+of+Thorns_%EC%84%9C%EC%8A%AC+%EA%B0%80%EC%8B%9C+%EC%B2%B4%EC%9D%B8.png"
            width="85"
            height="60"
          ></img>
        </div>
        <div style={{ marginRight: "10px" }}>
          <p>アレキサンドロス</p>
          <img
            src="https://asatamin-eternalreturn.com/wp-content/uploads/items/204504_%E3%82%A2%E3%83%AC%E3%82%AD%E3%82%B5%E3%83%B3%E3%83%89%E3%83%AD%E3%82%B9.png"
            width="85"
            height="60"
          ></img>
        </div>
      </div>
      <h3>必要アイテム</h3>
      <div style={{ display: "flex" }}>
        <div>
          <img
            src="https://asatamin-eternalreturn.com/wp-content/uploads/items/401208_%E7%94%9F%E5%91%BD%E3%81%AE%E6%9C%A8.png"
            width="85"
            height="60"
          ></img>
          ×１
        </div>
        <div>
          <img
            src="https://asatamin-eternalreturn.com/wp-content/uploads/items/401209_%E9%9A%95%E7%9F%B3.png"
            width="85"
            height="60"
          ></img>
          ×２
        </div>
        <div>
          <img
            src="https://asatamin-eternalreturn.com/wp-content/uploads/items/401403_%E3%83%95%E3%82%A9%E3%83%BC%E3%82%B9%E3%82%B3%E3%82%A2%E3%83%BC.png"
            width="85"
            height="60"
          ></img>
          ×２
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
        ></ArrowUpwardIcon>
      </a>
    </>
  );
}

export default EternalReturnAsariPage;
