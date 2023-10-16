import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ImageERLogo from "../image/EternalReturnLogo.jpg";
import ImageLOLLogo from "../image/LeagueOfLegendsLogo.jpg";
function MomongaPage(props) {
  const { setPage } = props;
  return (
    <>
      <div
        style={{
          width: "50%",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 40, backgroundColor: "yellow" }}>
          Introduce of game by Momonga
        </p>
        <button
          src={ImageERLogo}
          style={{
            fontSize: "15px",
            color: "Purple",
            padding: "20px 20px",
          }}
          onClick={() => {
            setPage("EternalReturnMomongaPage");
          }}
        >
          <MenuIcon />
        </button>

        <button
          onClick={() => {
            setPage("LOLMomongaPage");
          }}
        >
          <img src={ImageLOLLogo} alt="LOL Icon" />
        </button>
      </div>

      <button
        style={{ fontsize: "15px" }}
        onClick={() => {
          setPage("Top");
        }}
      >
        TopPage
      </button>
    </>
  );
}

export default MomongaPage;
