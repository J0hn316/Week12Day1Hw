const React = require("react");

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;

    const myStyle = {
      color: "#ffffff",
      backgroundColor: "#000000",
    };

    const capitalizedPokemon = pokemon.map((p) => ({
      name: p.name.charAt(0).toUpperCase() + p.name.slice(1),
    }));

    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>
          {capitalizedPokemon.map((poke, i) => (
            <div key={poke.name}>
              <a href={`/pokemon/${i}`}>
                <p>{poke.name}</p>
              </a>
            </div>
          ))}
        </ul>
        <a href="/pokemon/new">Search for a Pokemon</a>
        <br />
        <a href="/">Homepage</a>
      </div>
    );
  }
}

module.exports = Index;
