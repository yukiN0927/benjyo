import React, { useState } from "react";
import TopPage from "./pages/TopPage";
import MomongaPage from "./pages/MomongaPage";
import KaiPage from "./pages/KaiPage";
import AsariPage from "./pages/AsariPage";
import FavoriteCharactersPage from "./pages/FavoriteCharactersPage";
import EternalReturnMomongaPage from "./pages/EternalReturnMomogaPage";
import LOLMomongaPage from "./pages/LOLMomongaPage";
import EternalReturnAsariPage from "./pages/EternalReturnAsarierPage";
function App() {
  const [page, setPage] = useState("Top");
  return (
    <>
      {page === "Top" && <TopPage setPage={setPage} />}
      {/**以下モモンガ用ページ＆LOLモモンガ＆ERモモンガ */}
      {page === "Momonga" && <MomongaPage setPage={setPage} />}
      {page === "EternalReturnMomongaPage" && <EternalReturnMomongaPage />}
      {page === "LOLMomongaPage" && <LOLMomongaPage setPage={setPage} />}
      {/**以上モモンガ用ページ＆LOLモモンガ＆ERモモンガ */}
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
