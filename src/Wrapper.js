import React, { Component, Fragment } from 'react';
import store from './store';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movieActions from './store/actions/movies';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Intro from './components/Intro';
import MovieDetail from './components/MovieDetail';


class Wrapper extends Component{

  componentDidMount(){
    this.getData();
  };

  getData(){
    this.props.getMoviesRequest();
  }

  render(){
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Route path='/' exact component={Intro} />
            <Route path='/detail' component={MovieDetail} />
          </Fragment>
        </Router>
      </Provider>      
    )
  }
};

const mapStateToProps = (state) => {
  return {
    movies: state.data,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(movieActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);