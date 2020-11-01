import React, { useState } from "react";

const Search = ({ SetCountryName }) => {
  const [searchText, SearchText] = useState("");

  const onKeyType = (e) => {
    SearchText(e.target.value);
    console.log(e.target.value);
  };

  const fixSearchText = () => {
    var correctText = "";
    correctText = searchText.replace(" ", "-").toLowerCase();
    SetCountryName(correctText);
  }

  return (
    <div className="search">
        <input
          value={searchText}
          onChange={onKeyType}
          type="text"
          className="search-bar"
          placeholder="Type the name of country"
        />
        <button onClick={fixSearchText}>
          <i className="fas fa-search"></i>
        </button>
    </div>
  );
};

export default Search;
