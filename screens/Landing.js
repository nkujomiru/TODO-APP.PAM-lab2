import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


export default  LandingScreen = ({navigation}) => (
	<View style={styles.container}>
		<Text>Public Landing Screen</Text>
		<Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
	</View>
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
