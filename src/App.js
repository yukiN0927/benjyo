import React, { useState } from "react";
import TopPage from "./pages/TopPage";
import MomongaPage from "./pages/MomongaPage";
import KaiPage from "./pages/KaiPage";
import AsariPage from "./pages/AsariPage";
import FavoriteCharactersPage from "./pages/FavoriteCharactersPage";
import EternalReturnMomongaPage from "./pages/EternalReturnMomogaPage";
import EternalReturnAsariPage from "./pages/EternalReturnAsarierPage";
function App() {
  const [page, setPage] = useState("Top");
  return (
    <>
      {page === "Top" && <TopPage setPage={setPage} />}
      {page === "Momonga" && <MomongaPage setPage={setPage} />}
      {page === "EternalReturnMomongaPage" && <EternalReturnMomongaPage />}
      {page === "Kai" && <KaiPage setPage={setPage} />}
      {page === "Asari" && <AsariPage setPage={setPage} />}
      {page === "EternalReturnAsariPage" && (
        <EternalReturnAsariPage setPage={setPage} />
      )}
      {page === "Favorite" && <FavoriteCharactersPage setPage={setPage} />}
    </>
  );
}

export default App;
