import React from "react";

function KaiPage(props) {
  // props
  const { setPage } = props;

  return (
    <button
      onClick={() => {
        setPage("Top");
      }}
    >
      home
    </button>
  );
}

export default KaiPage;
