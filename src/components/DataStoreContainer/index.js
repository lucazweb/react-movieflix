import React from "react";
import { connect } from "react-redux";
import store from "../../store";
import { getMoviesRequest } from "../../store/actions/movies";

class DataStoreContainer extends React.Component {
  getMovies() {
    store.dispatch(getMoviesRequest());
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <React.Fragment>{this.props.render(this.props.movies)}</React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(DataStoreContainer);
