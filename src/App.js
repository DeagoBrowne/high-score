import React from "react";
import allCountryScores from "./Scores";
import HighScores from "./HighScores";


function App() {
  return (<HighScores scores = {allCountryScores}/>);
}

export default App;
