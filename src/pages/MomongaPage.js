import { yellow } from "@mui/material/colors";
import React from "react";

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
          onClick={() => {
            setPage("EternalReturnMomongaPage");
          }}
        >
          eternel return
        </button>
        <p>LOL</p>
      </div>
      <div
        onClick={() => {
          setPage("TopPage");
        }}
      >
        TopPage
      </div>
    </>
  );
}

export default MomongaPage;
