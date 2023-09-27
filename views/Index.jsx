const React = require("react");

class Index extends React.Component {
  render() {
    const { pokemons } = this.props;

    const myStyle = {
      color: "#ffffff",
      backgroundColor: "#000000",
    };
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>
          {pokemons.map((poke, i) => {
            return (
              <div key={poke.name}>
                <a href={`/pokemon/${poke._id}`}>
                  <p>{poke.name}</p>
                </a>
                <form
                  action={`/pokemon/${poke._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="Delete" />
                </form>
                <a href={`/pokemon/${poke._id}/edit`}>Edit this Pokemon</a>
              </div>
            );
          })}
        </ul>
        <a href="/pokemon/new">Search for a Pokemon</a>
        <br />
        <a href="/">Homepage</a>
      </div>
    );
  }
}

module.exports = Index;
