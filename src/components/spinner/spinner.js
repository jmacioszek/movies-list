import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Spinner = ({ size, color }) => (
  <View style={styles.container}>
    <ActivityIndicator size={size} color={color} />
  </View>
);

Spinner.propTypes = {
  size: PropTypes.oneOf(['large', 'small']),
  color: PropTypes.string,
};

Spinner.defaultProps = {
  size: 'large',
  color: '#000',
};

export default Spinner;
