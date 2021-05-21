import { createContext, useState } from 'react';

const SearchContext = createContext({
  search: '',
  changeSearch: () => { }
})

export default SearchContext;

export function SearchContextProvider(props) {
  const [wordsSearch, setWordsSearch] = useState("");

  function changeSearch(words) {
    setWordsSearch(words)
  }

  const context = {
    search: wordsSearch,
    changeSearch: changeSearch
  }

  return <SearchContext.Provider value={context}>
    {props.children}
  </SearchContext.Provider>
}