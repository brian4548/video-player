import React, {useState} from "react";

const SearchBar = ({onSubmit}) => {
  
  const [term, setTerm] = useState('Tesla')

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term)
  };
  const handleInputChange = (event) => {
    setTerm(event.target.value)
  };

  
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={handleFormSubmit}>
          <div className="field">
            <label>Search Videos</label>
            <input
              value={term}
              type="text"
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  
}

export default SearchBar;
