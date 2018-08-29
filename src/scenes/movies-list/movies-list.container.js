import React, { Component } from 'react';
import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import ListButton from './components/list-button';

import moviesListState from './state';
import commentsActions from '../../state/comments.actions'

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginBottom: 80,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  background: {
    backgroundColor: 'grey',
    borderColor: 'red',
    borderWidth: 1,
    flex: 1,
  },
});

class MoviesList extends Component {
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
      <View style={styles.background}>
        <View style={styles.container}>
          {isFetching ? (
            <ActivityIndicator size="large" />
          ) : (
            <FlatList
              data={movies.map(movie => ({
                ...movie,
                key: `${movie.title}-${movie.year}`,
              }))}
              renderItem={({ item: { key, title } }) => (
                <ListButton onPress={this.handleItemPress(key, title)} title={title} />
              )}
            />
          )}
        </View>
      </View>
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
)(MoviesList);
