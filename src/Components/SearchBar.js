import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term)
  };
  handleInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label>Search Videos</label>
            <input
              value={this.state.term}
              type="text"
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
