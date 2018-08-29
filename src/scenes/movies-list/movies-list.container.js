import React, { Component } from 'react';
import { connect } from 'react-redux';

import moviesListState from './state';
import commentsActions from '../../state/comments.actions';

import MoviesList from './movies-list';

class MoviesListContainer extends Component {
  componentDidMount() {
    this.props.onFetchMovies();
  }

  handleItemPress = (key, title) => () => {
    const { navigation, onFetchComments } = this.props;
    onFetchComments({ id: key });
    this.props.navigation.navigate('Comments', {
      id: key,
      title,
    });
  };

  render() {
    const { movies, isFetching } = this.props;

    return (
      <MoviesList movies={movies} isFetching={isFetching} onMoviePress={this.handleItemPress} />
    );
  }
}

const mapStateToProps = state => ({
  movies: state[moviesListState.name].movies,
  isFetching: state[moviesListState.name].isFetching,
});

const mapDispatchToProps = {
  onFetchMovies: moviesListState.actions.fetchMovies,
  onFetchComments: commentsActions.actions.fetchComments,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesListContainer);
