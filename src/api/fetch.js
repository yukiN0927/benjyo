export const getFavoriteCharacters = (setFunc) => {
  fetch("https://yukin.pythonanywhere.com/benjyo/")
    .then((response) => response.json())
    .then((data) => {
      setFunc(data);
    });
};

export const updateFavoriteCharacters = (data) => {
  if (data.length > 0) {
    fetch("https://yukin.pythonanywhere.com/update-favorite/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
};

export default getFavoriteCharacters;
