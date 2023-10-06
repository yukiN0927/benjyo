import React from "react";

function TopPage(props) {
  const { setPage } = props;
  return (
    <div>
      <button
        onClick={() => {
          setPage("Momonga");
        }}
      >
        Momonga
      </button>
      <button
        onClick={() => {
          setPage("Asari");
        }}
      >
        Asari
      </button>
      <button
        onClick={() => {
          setPage("Kai");
        }}
      >
        Kai
      </button>
      <button
        onClick={() => {
          setPage("Favorite");
        }}
      >
        Favorite
      </button>
    </div>
  );
}

export default TopPage;
