import React from "react";
function EternalReturnMomongaPage(props) {
  const { setPage } = props;
  return (
    <>
      <button
        onClick={() => {
          setPage("Top");
        }}
      >
        Top
      </button>
    </>
  );
}
export default EternalReturnMomongaPage;
