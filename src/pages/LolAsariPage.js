import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function LolAsariPage(props) {
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
              <Typography>LeagueofLegends</Typography>
            </Toolbar>
          </AppBar>
        </Box>
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

export default LolAsariPage;
