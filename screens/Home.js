import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TODOItem from '../components/TODOItem'
import FloatingButton from '../components/FloatingButton'
import ScreenNames from "./ScreenNames"
import Colours from "./Colours"

export default HomeScreen = ({navigation}) => (
	<View style={styles.container}>
    <TODOItem item = {{title: 'TestPost',content:'testing...', id: 1 }} navigation={navigation}></TODOItem>
    <FloatingButton onPressAction = {()=> navigation.navigate(ScreenNames.NewTask)}/>
	</View>
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: "stretch",
    backgroundColor: Colours.Background,
  },
});
