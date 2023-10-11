import { Button } from "@mui/material";
import IsolIcon from "../image/IsolIcon.png";

function EternalReturnAsariPage(props) {
  const { setPage } = props;
  return (
    <>
      エターナルリターンのページ
      <a href="https://www.youtube.com/watch?v=UKZt1vq8bKI" target="_blank">
        好き
      </a>
      <p>アイソル</p>
      <a href="https://er.op.gg/characters/isol/AssaultRifle" target="_blank">
        <img src={IsolIcon} width="80" height="80"></img>
      </a>
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
