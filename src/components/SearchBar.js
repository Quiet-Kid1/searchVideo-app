import React, { useState } from 'react';

const SearchBar = props => {
  const [term, setTerm] = useState('');

  const onInputChange = event => {
    setTerm(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    props.onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Search for a Video</label>
          <input type="text" onChange={onInputChange} value={term} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
