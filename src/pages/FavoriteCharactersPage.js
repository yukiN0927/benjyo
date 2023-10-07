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
import { getFavoriteCharacters, updateFavoriteCharacters } from "../api/fetch";

/** data */
import character from "../data/EternalReturnData";

/** お気に入りキャラのページ */
function FavoriteCharactersPage(props) {
  /** props */
  const { setPage } = props;
  /** state */
  // ページで表示するキャラとお気に入りランキング数字データ
  const [favoriteCharacter, setFavoriteCharacter] = useState([]);
  // EditDialogの表示コントロール
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  // dialog内のselectのvalue(kai)
  const [kaiOneFavorite, setKaiOneFavorite] = useState("");
  const [kaiTwoFavorite, setKaiTwoFavorite] = useState("");
  const [kaiThreeFavorite, setKaiThreeFavorite] = useState("");

  // dialog内のselectのvalue(Asari)
  const [asariOneFavorite, setAsariOneFavorite] = useState("");
  const [asariTwoFavorite, setAsariTwoFavorite] = useState("");
  const [asariThreeFavorite, setAsariThreeFavorite] = useState("");

  // dialog内のselectのvalue(Momonga)
  const [momongaOneFavorite, setMomongaOneFavorite] = useState("");
  const [momongaTwoFavorite, setMomongaTwoFavorite] = useState("");
  const [MenuItemomongaThreeFavorite, setMomongaThreeFavorite] = useState("");

  /** DialogのSelectを変更したときの処理 */
  const HandleCharaChange = (name, character, number, setData) => {
    // 今のお気に入りデータをcopy
    let temp = favoriteCharacter;
    // 変更された場所を検知してデータを更新する
    temp.map((data) => {
      if (data.name === name && data.number === number) {
        data.character = character;
        setData(character);
      }
      return data;
    });
    // useStateにset
    setFavoriteCharacter(temp);
  };

  /** ページ起動時にEdit dialogに登録済みデータを表示する用 */
  const viewSelectData = () => {
    // 各Selectにvalueをsetする
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
          <div style={{ display: "flex" }}>
            <div style={{ width: "-webkit-fill-available", paddingRight: 40 }}>
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
            <div style={{ width: "-webkit-fill-available", paddingRight: 40 }}>
              <p style={{ paddingBottom: 8 }}>Asari</p>
              <Box sx={{ minWidth: 120, paddingBottom: 8 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">1</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={asariOneFavorite}
                    onChange={(e) =>
                      HandleCharaChange(
                        "Asari",
                        e.target.value,
                        1,
                        setAsariOneFavorite
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
                    value={asariTwoFavorite}
                    onChange={(e) =>
                      HandleCharaChange(
                        "Asari",
                        e.target.value,
                        2,
                        setAsariTwoFavorite
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
                    value={asariThreeFavorite}
                    onChange={(e) =>
                      HandleCharaChange(
                        "Asari",
                        e.target.value,
                        3,
                        setAsariThreeFavorite
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
            {/** Momonga Area  *****************************************/}
            <div style={{ width: "-webkit-fill-available", paddingRight: 40 }}>
              <p style={{ paddingBottom: 8 }}>Momonga</p>
              <Box sx={{ minWidth: 120, paddingBottom: 8 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">1</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={momongaOneFavorite}
                    onChange={(e) =>
                      HandleCharaChange(
                        "Momonga",
                        e.target.value,
                        1,
                        setMomongaOneFavorite
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
                    value={momongaTwoFavorite}
                    onChange={(e) =>
                      HandleCharaChange(
                        "Momonga",
                        e.target.value,
                        2,
                        setMomongaTwoFavorite
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
                    value={MenuItemomongaThreeFavorite}
                    onChange={(e) =>
                      HandleCharaChange(
                        "Momonga",
                        e.target.value,
                        3,
                        setMomongaThreeFavorite
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
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              updateFavoriteCharacters(favoriteCharacter);
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
          Kai
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
          Asari
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
          Momonga
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
