import React, { useState } from "react";
import TopPage from "./pages/TopPage";
import MomongaPage from "./pages/MomongaPage";
import KaiPage from "./pages/KaiPage";
import AsariPage from "./pages/AsariPage";
import FavoriteCharactersPage from "./pages/FavoriteCharactersPage";
import EternalReturnMomongaPage from "./pages/EternalReturnMomogaPage";
import LOLMomongaPage from "./pages/LOLMomongaPage";
import EternalReturnAsariPage from "./pages/EternalReturnAsariPage";
import LolAsariPage from "./pages/LolAsariPage";
function App() {
  const [page, setPage] = useState("Top");
  return (
    <>
      {page === "Top" && <TopPage setPage={setPage} />}
      {/**以下モモンガ用ページ＆LOLモモンガ＆ERモモンガ */}
      {page === "Momonga" && <MomongaPage setPage={setPage} />}
      {page === "EternalReturnMomongaPage" && (
        <EternalReturnMomongaPage setPage={setPage} />
      )}
      {page === "LOLMomongaPage" && <LOLMomongaPage setPage={setPage} />}
      {/**以上モモンガ用ページ＆LOLモモンガ＆ERモモンガ */}
      {page === "Kai" && <KaiPage setPage={setPage} />}
      {page === "Asari" && <AsariPage setPage={setPage} />}
      {page === "EternalReturnAsariPage" && (
        <EternalReturnAsariPage setPage={setPage} />
      )}
      {page === "Favorite" && <FavoriteCharactersPage setPage={setPage} />}
      {page === "LolAsariPage" && <LolAsariPage setPage={setPage} />}
    </>
  );
}

export default App;
