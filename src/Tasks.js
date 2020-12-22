import AddTask from "./AddTask";
import Task from "./Task";
import axios from 'axios';
import { useContext, useEffect, useReducer, useState } from "react";
import Login from "./Login";
import UserContext from "./UserContext";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'load':
      return action.value;
    case 'add_task':
      return [...state, action.value];
    case 'delete_task':
      return state.filter(item => item.id !== action.value);
    case 'complete_task':
      return state.map(item => {});
    default:
      throw new Error();
  }
}

export default function Tasks() {
  // const [tasks, setTasks] = useState([]);
  const [tasks, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useContext(UserContext);

  // dispatch({type: 'complete_task', value: {id: id}});
  // dispatch({type: 'uncheck_task', value: {id: id}});

  useEffect(() => {
    axios.get('https://us-central1-js04-b4877.cloudfunctions.net/tasks/')
      .then(response => {
        dispatch({type: 'load', value: response.data.data});
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  function onAddTask(id, text) {
    let newTasks = [
      {
        id: id,
        text: text,
        completed: false
      },
      ...tasks
    ];
    // setTasks(newTasks);
    dispatch({type: 'add_task', value: newTasks});
  }

  function onDelete(id) {
    axios.delete('https://us-central1-js04-b4877.cloudfunctions.net/tasks/' + id)
      .then(response => {
        dispatch({type: 'delete_task', value: id});
      })
      .catch(error => {
        console.log(error);
      })
  }

  if (currentUser === null) {
    return <Login />
  }

  return (
    <>
      <h2>Hello: {currentUser.name}</h2>
      <AddTask onAddTask={onAddTask} />
      {
        tasks.map((task, i) => (
          <Task
            key={task.id}
            text={task.text}
            id={task.id}
            completed={task.completed}
            onDelete={onDelete}
          />
        ))
      }
    </>
  )
}