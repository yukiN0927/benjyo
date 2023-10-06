/** react */
import React, { useEffect, useState } from "react";
/** mui */
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
/** icon */
import HomeIcon from "@mui/icons-material/Home";
import ConstructionIcon from "@mui/icons-material/Construction";
/** fetch */
import getFavoriteCharacters from "../api/fetch";
/** data */
import character from "../data/EternalReturnData";

/** お気に入りキャラのページ */
function FavoriteCharactersPage(props) {
  /** props */
  const { setPage } = props;
  /** state */
  const [favoriteCharacter, setFavoriteCharacter] = useState([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const [kaiOneFavorite, setKaiOneFavorite] = useState("");
  const [kaiTwoFavorite, setKaiTwoFavorite] = useState("");
  const [kaiThreeFavorite, setKaiThreeFavorite] = useState("");

  const [asariOneFavorite, setAsariOneFavorite] = useState("");
  const [asariTwoFavorite, setAsariTwoFavorite] = useState("");
  const [asariThreeFavorite, setAsariThreeFavorite] = useState("");

  const [momongaOneFavorite, setMomongaOneFavorite] = useState("");
  const [momongaTwoFavorite, setMomongaTwoFavorite] = useState("");
  const [MenuItemomongaThreeFavorite, setMomongaThreeFavorite] = useState("");

  /** 編集時 */
  const HandleCharaChange = (name, character, number, setData) => {
    let temp = favoriteCharacter;
    temp.map((data) => {
      if (data.name === name && data.number === number) {
        data.character = character;
        setData(character);
      }
      return data;
    });
    setFavoriteCharacter(temp);
  };

  const viewSelectData = () => {
    if (favoriteCharacter) {
      let temp = favoriteCharacter;
      temp.map((data) => {
        if (data.name === "Kai" && data.number === 1)
          setKaiOneFavorite(data.character);
        if (data.name === "Kai" && data.number === 2)
          setKaiTwoFavorite(data.character);
        if (data.name === "Kai" && data.number === 3)
          setKaiThreeFavorite(data.character);

        if (data.name === "Asari" && data.number === 1)
          setAsariOneFavorite(data.character);
        if (data.name === "Asari" && data.number === 2)
          setAsariTwoFavorite(data.character);
        if (data.name === "Asari" && data.number === 3)
          setAsariThreeFavorite(data.character);

        if (data.name === "Momonga" && data.number === 1)
          setMomongaOneFavorite(data.character);
        if (data.name === "Momonga" && data.number === 2)
          setMomongaTwoFavorite(data.character);
        if (data.name === "Momonga" && data.number === 3)
          setMomongaThreeFavorite(data.character);

        return data;
      });
    }
  };

  /** 画面表示時の処理 */
  useEffect(() => {
    // DBから登録されているお気に入りキャラ情報取得
    getFavoriteCharacters(setFavoriteCharacter);
  }, []);

  useEffect(() => {
    viewSelectData();
  }, [favoriteCharacter]); // eslint-disable-line

  return (
    <div>
      {/** Dialog  *****************************************/}
      <Dialog
        open={editDialogOpen}
        onClose={() => {
          setEditDialogOpen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"お気に入りキャラ編集"}
        </DialogTitle>
        <DialogContent>
          <div style={{ width: "-webkit-fill-available" }}>
            {/** Kai Area  *****************************************/}
            <p style={{ paddingBottom: 8 }}>Kai</p>
            <Box sx={{ minWidth: 120, paddingBottom: 8 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">1</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={kaiOneFavorite}
                  onChange={(e) =>
                    HandleCharaChange(
                      "Kai",
                      e.target.value,
                      1,
                      setKaiOneFavorite
                    )
                  }
                >
                  {character.map((data) => {
                    return <MenuItem value={data}>{data}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120, paddingBottom: 8 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">2</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={kaiTwoFavorite}
                  onChange={(e) =>
                    HandleCharaChange(
                      "Kai",
                      e.target.value,
                      2,
                      setKaiTwoFavorite
                    )
                  }
                >
                  {character.map((data) => {
                    return <MenuItem value={data}>{data}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120, paddingBottom: 8 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">3</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={kaiThreeFavorite}
                  onChange={(e) =>
                    HandleCharaChange(
                      "Kai",
                      e.target.value,
                      3,
                      setKaiThreeFavorite
                    )
                  }
                >
                  {character.map((data) => {
                    return <MenuItem value={data}>{data}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Box>
          </div>
          {/** Asari Area  *****************************************/}
          <div style={{ width: "-webkit-fill-available" }}></div>
          {/** Momonga Area  *****************************************/}
          <div style={{ width: "-webkit-fill-available" }}></div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setEditDialogOpen(false);
            }}
            autoFocus
          >
            更新
          </Button>
        </DialogActions>
      </Dialog>
      {/** AppBar  *****************************************/}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                setPage("Top");
              }}
            >
              <HomeIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              お気に入りキャラ
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                setEditDialogOpen(true);
              }}
            >
              <ConstructionIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      {/** Bottom  *****************************************/}
      <div style={{ display: "flex" }}>
        <div style={{ width: "-webkit-fill-available" }}>
          {favoriteCharacter &&
            favoriteCharacter.map((data) => {
              return (
                <div>
                  {data.name === "Kai" && (
                    <>
                      {data.number}
                      {data.character}
                    </>
                  )}
                </div>
              );
            })}
        </div>
        <div style={{ width: "-webkit-fill-available" }}>
          {favoriteCharacter &&
            favoriteCharacter.map((data) => {
              return (
                <div>
                  {data.name === "Asari" && (
                    <>
                      {data.number}
                      {data.character}
                    </>
                  )}
                </div>
              );
            })}
        </div>
        <div style={{ width: "-webkit-fill-available" }}>
          {favoriteCharacter &&
            favoriteCharacter.map((data) => {
              return (
                <div>
                  {data.name === "Momonga" && (
                    <>
                      {data.number}
                      {data.character}
                    </>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default FavoriteCharactersPage;
