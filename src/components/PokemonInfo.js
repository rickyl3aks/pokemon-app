import React from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";

const PokemonInfo = ({ name, base }) => (
  <div className="infos">
    <h1 style={{ textAlign: "center" }}>{name.english}</h1>
    <table style={{ margin: "2rem" }}>
      <thead>
        {Object.keys(base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>
              <CountUp start={0} end={base[key]} duration={1} separator="," />
            </td>
          </tr>
        ))}
      </thead>
    </table>
  </div>
);

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
  }),
  base: PropTypes.shape({
    english: PropTypes.string,
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
};

export default PokemonInfo;
