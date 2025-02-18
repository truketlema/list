// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import List from "./component/List";

function App() {
  const members1 = [
    "Truket Lema",
    "Eyoab Shemsu",
    "Tadesse Zelalem",
    "Hewan Solomon",
    "Hawdiya Abdella",
    "Fikir Addis",
    "Eden Bekalu",
    "Edlawit Sirak",
    "Abenezer Mulugeta",
    "Dagmawit Harka",
  ];
  return (
    <>
      <List members={members1} />
      {/* <List members={members2} /> */}
    </>
  );
}

export default App;
