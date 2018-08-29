import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import BackButton from './components/back-button';
import Comments from './comments';
import Spinner from '../../components/spinner';

import commentsState from './state/';

class CommentsContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <BackButton onPress={() => navigation.goBack(null)} />,
      title: navigation.getParam('title'),
    };
  };

  state = {
    comment: '',
  };

  handleChangeText = comment => {
    this.setState({
      comment,
    });
  };

  handleSubmitPress = () => {
    const { comment } = this.state;
    if (Boolean(comment)) {
      const { navigation, onAddComment } = this.props;
      const id = navigation.getParam('id');

      onAddComment({ id, comment });

      this.setState({
        comment: '',
      });
    }
  };

  render() {
    const { isFetching, comments } = this.props;
    if (isFetching) {
      return <Spinner />;
    }

    return (
      <Comments
        comments={comments}
        onSubmitPress={this.handleSubmitPress}
        onChangeText={this.handleChangeText}
        comment={this.state.comment}
      />
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments.comments,
  isFetching: state.comments.isFetching,
});

const mapDispatchToProps = {
  onFetchComments: commentsState.actions.fetchComments,
  onAddComment: commentsState.actions.addComment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentsContainer);
