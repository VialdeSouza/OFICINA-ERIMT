import React, { useState } from "react";
import "./App.css";
import { InputAction } from "./components/inputAction";
import { ItemToDo } from "./components/item";

function App() {
  //{description: '' status: done || todo }
  const [tasks, setTasks] = useState([{id: 1, description: 'Limpar o quintal', status: 'todo'}, {id: 0, description: 'Comprar maçã, banana e tomate', status: 'done'}])
  
  const addTask = (description) => {
    const id = Math.floor((Math.random() * 10000) + 1);
    setTasks(prev => ([...prev, {id, description, status: 'todo'}]))
  }

  const updateStatusTask = (id, status) => {
    const copyTask = tasks.filter((task) => task.id !== id  );
    const index =  tasks.findIndex((task) => task.id === id );
    const taskToChange = {...tasks[index], status}
    setTasks([...copyTask, taskToChange ]);
  }

  const toDoTasks = tasks.filter(task => task.status === 'todo')
 
  return (
    <div className="App">
      <header className="App-header">To-do-App</header>
      <div className="to-do-section">
        <InputAction
          label="Nova tarefa"
          nameButton="Adicionar"
          onClick={addTask}
        />
        {toDoTasks.map((task) => (
          <ItemToDo key={task.id} label={task.description} onRemove={() => updateStatusTask(task.id, 'cancel')} onFinish={() => updateStatusTask(task.id, 'done')}/>
        ))}
    
      </div>
    </div>
  );
}

export default App;
