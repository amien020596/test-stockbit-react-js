import React from 'react';
import { useState, useContext } from 'react';
import SearchContext from '../../Store/Context/Search-context';

function Search() {
  const searchContext = useContext(SearchContext)
  const [search, setSearch] = useState("");

  function searchMovieHandler(event) {
    setSearch(event.target.value)
  }

  function doSearch(e) {
    e.preventDefault();
    searchContext.changeSearch(search)
  }

  function onKeyDownEnter(e) {
    if (e.keyCode === 13) {
      searchContext.changeSearch(search)
    }
  }

  return (
    <div style={{ display: "inline-block" }}>
      <input type="text" value={search} style={{ marginRight: ".2rem", width: "20rem", paddingLeft: "10px", outline: "none", border: "2px solid #a09b9b", height: "2rem", boxShadow: "rgb(255 255 255) 1px 1px 1px", borderRadius: ".2rem" }} onChange={searchMovieHandler} onKeyDown={onKeyDownEnter} />
      <button style={{ height: "2rem", width: "5rem", backgroundColor: "#a0a1a2", color: "#3c3b3b", border: "none", borderRadius: "5px", boxShadow: "rgb(255 255 255) 1px 1px 1px", fontWeight: "500" }} onClick={doSearch}>Search</button>
    </div>
  )
}
export default Search;