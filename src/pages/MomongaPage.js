import React from "react";
import ERLogo from "../image/EternalReturnLogo.jpg";
import LOLLogo from "../image/LeagueOfLegendsLogo.jpg";
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
          <img src={ERLogo} alt="ERIcon" style={{ width: 80, height: 50 }} />
        </button>

        <button
          onClick={() => {
            setPage("LOLMomongaPage");
          }}
        >
          <img src={LOLLogo} alt="LOL Icon" style={{ width: 80, height: 50 }} />
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
