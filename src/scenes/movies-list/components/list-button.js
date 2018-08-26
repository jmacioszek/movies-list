import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  button: {
    padding: 24,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginLeft: 24,
  },
  title: {
    fontSize: 18,
    paddingRight: 8,
  },
  arrow: {
    // should be done with css  
    fontSize: 24,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const ListButton = ({ onPress, title }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.arrow}>></Text>
    </View>
  </TouchableOpacity>
);

export default ListButton;
