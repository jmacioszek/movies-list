import React from 'react';
import { View, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import ListButton from './components/list-button';
import PropTypes from 'prop-types';

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
    backgroundColor: '#e4e4e7',
    borderWidth: 1,
    flex: 1,
  },
});

const MoviesList = ({ movies, onMoviePress, isFetching }) => (
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
            <ListButton onPress={onMoviePress(key, title)} title={title} />
          )}
        />
      )}
    </View>
  </View>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onMoviePress: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
};

MoviesList.defaultProps = {
  isFetching: false,
};

export default MoviesList;
