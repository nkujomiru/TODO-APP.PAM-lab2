import React from "react";
import { StyleSheet, Alert} from "react-native";
import CustomCalendar from "./CustomCalendar"
import * as dates from"../helpers/dateHelpers" 

export default AddTaskCalendar = ({ selectedDate, setSelectedDate }) => {
    let today = dates.getCurrentDate()
    let myMarkedDays = {}
    myMarkedDays[`${today.dateString}`] = {marked: true, dotColor: 'lightgreen'}
    myMarkedDays[`${selectedDate.dateString}`] = {selected: true, selectedColor: 'blue'}

  return (
    <CustomCalendar style = {styles.Calendar}
      onDayPressAction={(date) => setSelectedDate(date)}
      onDayLongPressAction={(date) => setSelectedDate(date)}
      markedDays = {myMarkedDays}
      />
  )
}


const styles = StyleSheet.create({
  Calendar: {
  },
});