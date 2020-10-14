import React from "react";
import { StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

export default CustomCalendar = ({onDayPressAction, onDayLongPressAction, markedDays, style}) => {
  return (
    <Calendar style = {style}
    
      // Handler which gets executed on day press. Default = undefined
      onDayPress={(day) => {
        // console.log("selected day", day);
        onDayPressAction && onDayPressAction(day);
      }}
      // Handler which gets executed on day long press. Default = undefined
      onDayLongPress={(day) => {
        onDayLongPressAction && onDayLongPressAction(day);
      }}
      markedDates={markedDays}
      // These are default settings for all calendars in app

      // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
      monthFormat={"yyyy MMM"}
      // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
      firstDay={1}
      // Hide day names. Default = false
      hideDayNames={true}
      // Show week numbers to the left. Default = false
      showWeekNumbers={true}
      // Enable the option to swipe between months. Default = false
      enableSwipeMonths={true}
      // Handler which gets executed when visible month changes in calendar. Default = undefined

      // TODO: future options
      //  onMonthChange={(month) => {
      //    console.log("month changed", month);
      //  }}
      //  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
      //  onPressArrowLeft={(subtractMonth) => subtractMonth()}
      //  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
      //  onPressArrowRight={(addMonth) => addMonth()}
    ></Calendar>
  );
};

const styles = StyleSheet.create({});
