import React from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#3389ff',
    paddingHorizontal: 8,
    borderRadius: 16,
    right: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    padding: 8,
    borderColor: '#a9abb3',
    borderWidth: 1,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderRightWidth: 0,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 24,
    backgroundColor: '#e4e4e7',
    borderTopWidth: 1,
  },
  commentContainer: {
    padding: 16,
    alignItems: 'flex-start',
    backgroundColor: '#e4e4e7',
    justifyContent: 'center',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
    borderRadius: 8,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
    marginTop: 24,
    zIndex: 10,
  },
  commentText: {
    fontSize: 16,
  },
});

const Comments = ({ comments, onSubmitPress, onChangeText, comment }) => (
  <View style={styles.container}>
    <ScrollView style={styles.scrollView}>
      {comments.map(comment => (
        <View key={uuidv4()} style={styles.commentContainer}>
          <Text style={styles.commentText}>{comment}</Text>
        </View>
      ))}
    </ScrollView>
    <KeyboardAvoidingView keyboardVerticalOffset={60} enabled behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={comment}
          placeholder="Write comment"
        />
        <TouchableOpacity style={styles.submitButton} onPress={onSubmitPress} e>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  </View>
);

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSubmitPress: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
};

export default Comments;
