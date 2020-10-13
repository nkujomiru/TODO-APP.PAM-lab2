import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import CustomCalendar from "./CustomCalendar"

export default TaskCalendar = ({ taskList, selectedDate, setSelectedDate }) => {
  let myMarkedDays = {}

  taskList.forEach(task => { 
    myMarkedDays[`${task.date.dateString}`] = {marked: true, dotColor: 'red'}
  });
  myMarkedDays[`${selectedDate.dateString}`] = {selected: true, selectedColor: 'blue'}

  return (
    <CustomCalendar style = {styles.Calendar}
      onDayPressAction={(date) => setSelectedDate(date)}
      onDayLongPressAction={(date) => setSelectedDate(date)}
      markedDays = {myMarkedDays}
    />
  );
};


const styles = StyleSheet.create({
  Calendar: {
    position: "absolute",
    height: 380,
    width: "100%",
    left: 0,
    bottom: 0,
  },
});