import React from 'react';
import { connect } from 'react-redux';

function Detail(props) {
  console.log("props detail movie", props)
  return (
    <div className="App">
      <p>Detail Movie</p>
      <img src={props.detailMovie.poster} alt={props.detailMovie.title} />
      <p>{props.detailMovie.title}</p>
      <p>{props.detailMovie.year}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    detailMovie: state.moviesData.detail || {}
  }
}

export default connect(mapStateToProps, {})(Detail);