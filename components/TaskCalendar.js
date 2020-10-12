import React from "react";
import { StyleSheet, Image, TouchableOpacity, Alert} from "react-native";
import { Calendar } from "react-native-calendars"
import CustomCalendar from "./CustomCalendar"

export default TaskCalendar = ({ taskList, selectedDate, setSelectedDate }) => {
  let myMarkedDays = {}

  taskList.forEach(task => { 
    myMarkedDays[`${task.date.dateString}`] = {marked: true, dotColor: 'red'}
  });

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