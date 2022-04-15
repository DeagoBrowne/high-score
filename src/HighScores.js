import React from "react";

const HighScores = ({ scores }) => {
  // console.log(scores);
  return (
    <div>
      {scores.map((country) => {
        // console.log(country);
        return ( <ul><p>{`High Scores: ${country.name}`}</p>
        {country.scores.map((person) => {
          return (
            <li><p>{`${person.n} ${person.s}`}</p></li>
          );
        })}</ul>
        );
      })}
    </div>
  );
};

export default HighScores;