import React from "react";
import { StyleSheet } from "react-native";
import CustomCalendar from "./CustomCalendar"

export default TaskCalendar = ({ taskList, selectedDate, setSelectedDate }) => {
  let myMarkedDays = {}

  taskList.forEach(task => { 
    myMarkedDays[`${task.date.dateString}`] = {marked: true, dotColor: 'red'}
  });
  myMarkedDays[`${selectedDate.dateString}`] = {selected: true, selectedColor: 'blue'}

  return (
    <CustomCalendar
      onDayPressAction={(date) => setSelectedDate(date)}
      onDayLongPressAction={(date) => setSelectedDate(date)}
      markedDays = {myMarkedDays}
    />
  );
};


const styles = StyleSheet.create({

});