import React, { useState } from "react";
import TopPage from "./pages/TopPage";
import MomongaPage from "./pages/MomongaPage";
import KaiPage from "./pages/KaiPage";
import AsariPage from "./pages/AsariPage";

function App() {
  const [page, setPage] = useState("Top");
  return (
    <>
      {page === "Top" && <TopPage setPage={setPage} />}
      {page === "Momonga" && <MomongaPage />}
      {page === "Kai" && <KaiPage />}
      {page === "Asari" && <AsariPage />}
    </>
  );
}

export default App;
