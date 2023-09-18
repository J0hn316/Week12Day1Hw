const React = require("react");

class Index extends React.Component {
  render() {
    const myStyle = {
      color: "#ffffff",
      backgroundColor: "#000000",
    };
    const { pokemon } = this.props;

    const capitalizedPokemon = pokemon.map((p) => ({
      name: p.name.charAt(0).toUpperCase() + p.name.slice(1),
    }));

    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>
          {capitalizedPokemon.map((poke) => (
            <div key={poke.name}>
              <p>{poke.name}</p>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
