import React from "react";
import PropTypes from "prop-types";

const PokemonRow = ({ pokemon, onSelect }) => (
  <tr>
    <td className="pokemon">{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <button onClick={() => onSelect(pokemon)} className="btn">
        Select
      </button>
    </td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
    }),
    type: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  onSelect: PropTypes.func.isRequired,
};

export default PokemonRow;
