import * as Actions from "./taskActions"

import uuid from 'react-native-uuid'
import { Buffer } from 'buffer';
global.Buffer = Buffer; // needs to be initialized

const initialState = {
  taskList: []
};

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_Task: {
      return {
        ...state,
        taskList: [
          {
            id: uuid.v1(),
            title: action.payload.title
              ? `${action.payload.title}`
              : `Task nr ${state.taskList.length + 1}`,
            content: action.payload.content,
            date: action.payload.date,
            notification: action.payload.notification ?? null,
          },
          ...state.taskList,
        ],
      };
    }

    case Actions.DELETE_Task:
      console.log("Deleted");
      return {
        ...state,
        taskList: state.taskList.filter(
          (taskList) => taskList.id !== action.payload
        ),
      };

    default: {
      return state;
    }
  }
};
export default TaskReducer;
