const React = require("react");

class Edit extends React.Component {
  render() {
    return (
      <form
        action={`/pokemon/${this.props.pokemon._id}?_method=PUT`}
        method="POST"
      >
        Name:{" "}
        <input type="text" name="name" defaultValue={this.props.pokemon.name} />
        <br />
        <input type="submit" value="Change Pokemon" />
      </form>
    );
  }
}

module.exports = Edit;
