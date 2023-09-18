import React from "react";

function App() {
  let test = 1;
  return (
    <>
      <button
        onClick={() => {
          test = test + 1;
        }}
      />
      {test}
    </>
  );
}

export default App;
