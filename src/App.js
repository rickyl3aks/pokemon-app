import React from "react";
import "./App.css";
import pokemon from "./pokemon.json";
import PokemonInfo from "./components/PokemonInfo";
import PokemonRow from "./components/PokemonRow";

function App() {
  const [filter, filterSet] = React.useState("");
  const [selectedItem, selectedItemSet] = React.useState(null);
  return (
    <div
      style={{
        margin: "auto",
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">POKEDEX</h1>
      <div className="container">
        <div>
          <div className="search-bar-container">
            <input
              maxLength="14"
              className="search-bar"
              placeholder="Type a Pokemon"
              value={filter}
              onChange={(e) => filterSet(e.target.value)}
            />
          </div>
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {window.innerWidth > 600
                ? pokemon
                    .filter((pokemon) =>
                      pokemon.name.english
                        .toLowerCase()
                        .includes(filter.toLowerCase())
                    )

                    .map((pokemon) => (
                      <PokemonRow
                        pokemon={pokemon}
                        key={pokemon.id}
                        onSelect={(pokemon) => selectedItemSet(pokemon)}
                      />
                    ))
                : pokemon
                    .filter((pokemon) =>
                      pokemon.name.english
                        .toLowerCase()
                        .includes(filter.toLowerCase())
                    )
                    .slice(0, 3)
                    .map((pokemon) => (
                      <PokemonRow
                        pokemon={pokemon}
                        key={pokemon.id}
                        onSelect={(pokemon) => selectedItemSet(pokemon)}
                      />
                    ))}
            </tbody>
          </table>
        </div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </div>
    </div>
  );
}

export default App;
