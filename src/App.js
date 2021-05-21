import './App.css';

import { Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import SearchContext from './Store/Context/Search-context';
import { useContext } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from './Store/Actions/Movies';
import { ModalContextProvider } from './Store/Context/Modal-context';

function App(props) {
  const searchContext = useContext(SearchContext)
  const wordsSearch = searchContext.search

  props.setWordsSearch(wordsSearch)

  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <ModalContextProvider>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/detail" >
            <Detail />
          </Route>
        </Switch>
      </ModalContextProvider>
    </div>
  );
}

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = dispatch => {
  return {
    setWordsSearch: (words) => dispatch(searchMovies(words))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
