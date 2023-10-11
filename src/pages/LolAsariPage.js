import { Button } from "@mui/material";

function LolAsariPage(props) {
  const { setPage } = props;
  return (
    <>
      lolのページ
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

export default LolAsariPage;
