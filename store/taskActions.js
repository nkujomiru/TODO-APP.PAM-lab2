export const DELETE_Task = '[Task] Deleted Task'
export const ADD_Task = '[Task] Added Task'

export const deleteTask = (TaskId)=>(
  {
      type: DELETE_Task,
      payload: TaskId
  }
);

export const addTask = (title, content, date, notification) => (
    {
        type: ADD_Task, 
        payload:{title, content, date, notification}
    }
);