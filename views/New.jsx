const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Add Pokemon page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" />
          <br />
          <input type="submit" name="" value="View Pokemon" />
        </form>
        <a href="/pokemon">Pokemon List</a>
      </div>
    );
  }
}

module.exports = New;
