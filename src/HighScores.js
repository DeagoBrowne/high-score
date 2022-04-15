import React from "react";

const HighScores = ({ scores }) => {
  // console.log(scores);
  return (
    <div>
      <tbody>{scores.map((country) => {
        return (
          <>
            <p>{country.name}</p>
            <table>
              <thead>
                <tr>
                  <th>Person</th>
                  <th>Score</th>
                </tr>
              </thead>
              {country.scores.map((person) => {
                return (<tr><td>{person.n}</td>
                  <td>{person.s}</td>
                </tr>);
              })}
            </table>
          </>);
      })}</tbody>
      {/* {scores.map((country) => {
        // console.log(country);
        return ( <ul><p>{`High Scores: ${country.name}`}</p>
        {country.scores.map((person) => {
          return (
            <li><p>{`${person.n} ${person.s}`}</p></li>
          );
        })}</ul>
        );
      })} */}
    </div>
  );
};

export default HighScores;