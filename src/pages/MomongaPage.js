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
          style={{ fontSize: "15px", color: "Purple", padding: "20px 20px" }}
          onClick={() => {
            setPage("EternalReturnMomongaPage");
          }}
        >
          Eternel Return
        </button>

        <button
          style={{ fontSize: "15px", color: "Purple", padding: "20px 20px" }}
          onClick={() => {
            setPage("LOLMomongaPage");
          }}
        >
          LOL
        </button>
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
