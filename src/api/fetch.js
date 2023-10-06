const getFavoriteCharacters = (setFunc) => {
  fetch("https://yukin.pythonanywhere.com/benjyo/")
    .then((response) => response.json())
    .then((data) => {
      setFunc(data);
    });
};
export default getFavoriteCharacters;
