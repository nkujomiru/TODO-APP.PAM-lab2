import React, { useState, } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';

import {connect } from 'react-redux';

import TODOItem from '../components/TODOItem'
import FloatingButton from '../components/FloatingButton'
import ScreenNames from "./ScreenNames"
import Colours from "./Colours"

import TaskCalendar from "../components/TaskCalendar"
import * as dates from "../helpers/dateHelpers" 
import * as filters from "../helpers/taskFilters"
import TextInput from "../components/TextInput"

const HomeScreen = ({ navigation, taskList, dispatch }) => {
  
  const [selectedDate, setSelectedDate] = useState(dates.getCurrentDate());
  const [filter, setFilter] = useState (filters.EmptyFilter);
  const [searchText, setSearchText] = useState ('');
  
  
  const EmptyFilter = () => (true)

  return(
  
  <View style={styles.container}>

    <View>
    <TextInput
    term = {searchText}
    onChange = {setSearchText}
    />
      <FlatList style={styles.flatList}
        data={taskList.filter((task) => filters.DateNameFilter(task, selectedDate, searchText))}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({ item }) => {
          return <TODOItem item={item} navigation={navigation} dispatch={dispatch}></TODOItem>;
        }}
      />
    </View>
    <View style={{alignContent:"flex-end"}}>
      <TaskCalendar
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      taskList={taskList}/>
    </View>

    <FloatingButton   
      onPressAction={() => navigation.navigate(ScreenNames.NewTask)}
    />
  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: Colours.Background,
  },
  flatList: {
    flexGrow:2,
    flexShrink:0
  }
});

const mapStateToProps = (state) =>{
  // console.log(state);
  return {
      taskList: state.tasks.taskList
  }
};


export default connect(mapStateToProps)(HomeScreen);
