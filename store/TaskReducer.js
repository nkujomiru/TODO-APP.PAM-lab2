import * as Actions from "./taskActions"

import uuid from 'react-native-uuid'
import { Buffer } from 'buffer';
global.Buffer = Buffer; // needs to be initialized

const initialState = {
//   taskList: [{ title: "TestPost", content: "testing...", id: 1 }],
  taskList: []
};

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_Task:
        {
            console.log('Added');

      return {
        ...state,
        taskList: [
          {
            id: uuid.v1(),
            title: action.payload.title
              ? `${action.payload.title}`
              : `Task nr ${state.length + 1}`,
            content: action.payload.content,
          },
          ...state.taskList
        ],
      };}

    case Actions.DELETE_Task:
        console.log('Deleted');
      return {...state,taskList: state.taskList.filter((taskList) => taskList.id !== action.payload)};

    default: {
      return state;
    }
  }
};
export default TaskReducer;
