import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert} from "react-native";
import AddTaskCalendar from "../components/AddTaskCalendar"
import * as dates from"../helpers/dateHelpers" 
import Screens from "./ScreenNames";
import Colours from "./Colours";

import { connect } from "react-redux";
import * as taskActions from "../store/taskActions";

const CreateNewTask = ({ route, navigation, dispatch }) => {

  let item = null;
  if (typeof route?.params?.item !== "undefined" && route?.params?.item != null)
    item = route.params.item
  else item = { title: "", content: "", id: -1, date: dates.getCurrentDate() }

    const [title, setTitle] = useState(item?.title ?? "");
    const [text, setText] = useState(item?.content ?? "");
    const [selectedDate, setSelectedDate] = useState(item.date);
    console.log(selectedDate)


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Other Notes</Text>
      <TextInput
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.input}
      />
    <AddTaskCalendar
    selectedDate = {selectedDate}
    setSelectedDate = {setSelectedDate}
    task = {item}
    />
      <Button
        title="Done"
        onPress={() => {
          console.log('Deleting-CreateNewTask');
          dispatch(taskActions.deleteTask(item?.id));
          console.log('Adding-CreateNewTask');
          dispatch(taskActions.addTask(title, text, selectedDate));
          navigation.navigate(Screens.Home);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginBottom: 3,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    padding: 5,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: Colours.Background,
  },
});

const mapStateToProps = (state) => {
  return {
    taskList: state.tasks.taskList,
  };
};
export default connect(mapStateToProps)(CreateNewTask);
