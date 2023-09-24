import React, { useState, useEffect } from "react";
import "./css/Kai.css";
import Kai from "../image/Kai.png";
import KaiProf from "../image/KaiProf.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function KaiPage(props) {
  // props
  const { setPage } = props;

  /** ブラウザのサイズを取得 ****************************************/
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  /*****************************************************************/

  return (
    <div
      className="container"
      style={{
        // スクロールバーを消すために "-20"
        height: windowDimensions.height - 20,
      }}
    >
      {/** 左矢印ボタン */}
      <div
        style={{
          position: "absolute",
          marginTop: windowDimensions.height / 2,
          marginLeft: windowDimensions.width / 20,
        }}
      >
        <IconButton
          color="black"
          onClick={() => {
            setPage("Asari");
          }}
          style={{ transform: `scale(${windowDimensions.height / 200})` }}
        >
          <ArrowBackIosIcon />
        </IconButton>
      </div>
      {/** 右矢印ボタン */}
      <div
        style={{
          position: "absolute",
          marginTop: windowDimensions.height / 2,
          marginLeft: windowDimensions.width - windowDimensions.width / 13,
        }}
      >
        <IconButton
          color="black"
          onClick={() => {
            setPage("Momonga");
          }}
          style={{ transform: `scale(${windowDimensions.height / 200})` }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
      {/** キャラ画像 */}
      <img src={Kai} alt="Kai" className="kai-img" />
      {/** キャラ紹介テキスト画像 */}
      <img src={KaiProf} alt="Kai" className="kai-prof-img" />
    </div>
  );
}

export default KaiPage;
