import axios from 'axios'
import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';


class App extends React.Component {

  handleTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    console.log(response)
  }


  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.handleTermSubmit}/>
      </div>
    );
  }
}

export default App;
