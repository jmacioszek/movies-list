import firebase from 'react-native-firebase';

const fetchComments = movieId => {
  return firebase
    .database()
    .ref(`/movies/${movieId}`)
    .once('value');
};

const updateComments = (movieId, comments) => {
  firebase
    .database()
    .ref('/movies/')
    .update({
      [movieId]: comments,
    });
};

export default {
  fetchComments,
  updateComments,
};
