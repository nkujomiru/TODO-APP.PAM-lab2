import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TODOItem from '../../components/TODOItem'

export default HomeScreen = () => (
	<View style={styles.container}>
    <TODOItem item = {{title: 'TestPost',content:'testing...', id: 1 }}></TODOItem>
	</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: "stretch",
    backgroundColor: "#f5f1d7",
  },
});
