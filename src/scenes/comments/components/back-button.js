import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import commentsState from '../state/';

const styles = StyleSheet.create({
  button: {
    padding: 5,
  },
  text: {
    fontSize: 32,
    marginLeft: 8,
    top: -2,
  },
});

class BackButton extends Component {
  handleOnPress = () => {
    const { onPress, onGoBack } = this.props;
    onGoBack();
    onPress();
  };

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.handleOnPress}>
        <Text style={styles.text}>{'<'}</Text>
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = {
  onGoBack: commentsState.actions.goBack,
};

export default connect(
  null,
  mapDispatchToProps,
)(BackButton);
