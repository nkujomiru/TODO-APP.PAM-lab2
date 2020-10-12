import React, { useState, } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import {connect } from 'react-redux';

import TODOItem from '../components/TODOItem'
import FloatingButton from '../components/FloatingButton'
import ScreenNames from "./ScreenNames"
import Colours from "./Colours"

import TaskCalendar from "../components/TaskCalendar"
import * as dates from"../helpers/dateHelpers" 

const HomeScreen = ({ navigation, taskList, dispatch }) => {
  
  const [selectedDate, setSelectedDate] = useState(dates.getCurrentDate());

  return(
  
  <View style={styles.container}>

    <FlatList
      data={taskList.filter((taskList) => taskList.date.dateString == selectedDate.dateString)}
      keyExtractor={(task) => task.id.toString()}
      renderItem={({ item }) => {
        return <TODOItem item={item} navigation={navigation} dispatch={dispatch}></TODOItem>;
      }}
    />
    <TaskCalendar style={{flex:1}} 
    selectedDate={selectedDate}
    setSelectedDate={setSelectedDate}
    taskList={taskList}/>

    <FloatingButton
      onPressAction={() => navigation.navigate(ScreenNames.NewTask)}
    />
  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: "stretch",
    backgroundColor: Colours.Background,
  },
});

const mapStateToProps = (state) =>{
  // console.log(state);
  return {
      taskList: state.tasks.taskList
  }
};


export default connect(mapStateToProps)(HomeScreen);
