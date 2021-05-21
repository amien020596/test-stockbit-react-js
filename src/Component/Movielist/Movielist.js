import Card from "../Card/Card";
import classes from "./movielist.module.css";
import instanceAxios from '../../Utility/axios';
import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchDataMovies, clearDataMovies } from "../../Store/Actions/Movies";


class Movielist extends Component {
  constructor(props) {
    super(props)
    this.movieScroll = React.createRef();
    this.state = {
      page: 1
    }
    this.isMount = false;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true)
    this.handleFetchData()
    this.isMount = true;
  }

  componentWillUnmount() {
    this.isMount = false;
    window.removeEventListener('scroll', this.handleScroll)
    this.props.clearDataMovie()
  }

  handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 1) {
      this.setState({ page: this.state.page + 1 })
      this.handleFetchData()
    }
  }

  handleFetchData = async () => {

    await instanceAxios.get('http://www.omdbapi.com', {
      params: {
        apikey: "faf7e5bb",
        s: "batman",
        page: this.state.page
      }
    })
      .then(response => {
        if (response.data.Response === "True") {
          if (this.isMount) {
            this.props.fetchMovie(response.data.Search)
          }
        }
      }).catch(error => {
        console.log(error)
      })
  }

  render() {
    let content = <p>not found movie</p>
    if (this.props.dataMovies && this.props.search === "") {
      content = this.props.dataMovies.map((movie, index) =>
        <Card
          poster={movie.Poster}
          title={movie.Title}
          type={movie.Type}
          year={movie.Year}
          id={movie.imdbID}
          key={index}
        />
      )
    } else if (this.props.dataMoviesSearch.length > 0) {
      content = this.props.dataMoviesSearch.map((movie, index) =>
        <Card
          poster={movie.Poster}
          title={movie.Title}
          type={movie.Type}
          year={movie.Year}
          id={movie.imdbID}
          key={index}
        />
      )
    } else {
      content = <p>not found movie</p>
    }

    return (
      <div className={classes.list} ref={this.movieScroll}>
        {content}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    dataMovies: state.moviesData.data || [],
    dataMoviesSearch: state.moviesData.dataSearch || [],
    search: state.moviesData.search || "",
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchMovie: (data) => dispatch(fetchDataMovies(data)),
    clearDataMovie: () => dispatch(clearDataMovies())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movielist);