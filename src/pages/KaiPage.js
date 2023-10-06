import React from "react";

function KaiPage(props) {
  // props
  const { setPage } = props;
  const [favoriteCharacters, setFavoriteCharacters] = React.useState([]);

  const fetchPosts = () => {
    console.log("fetching-start");

    fetch("https://yukin.pythonanywhere.com/benjyo/")
      .then((response) => response.json())
      .then((data) => {
        setFavoriteCharacters(data);
        console.log(data);
      });
  };

  return (
    <>
      <button
        onClick={() => {
          setPage("Top");
        }}
      >
        Top
      </button>
      <button
        onClick={() => {
          fetchPosts();
        }}
      >
        お気に入りキャラ取得
      </button>
      {favoriteCharacters.length > 0 && (
        <>
          {favoriteCharacters[0].number}
          {favoriteCharacters[0].name}
          {favoriteCharacters[0].character}
        </>
      )}
    </>
  );
}

export default KaiPage;
