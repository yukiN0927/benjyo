import { Button } from "@mui/material";

function EternalReturnAsariPage(props) {
  const { setPage } = props;
  return (
    <>
      asasasa
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
