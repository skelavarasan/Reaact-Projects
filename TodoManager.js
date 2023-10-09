// import React, { useState } from 'react'

// function TodoManager() {

//     const[list,setList] = useState([]);
//     const[input,setInput] = useState(' ')

//     const addTask = ()=>{
//         if(input.trim()!==''){
//             setList([...list,{text : input , completed : false}]);
//             setInput(' ')
//         }
//     }

//     const removeTask = (index)=>{
//         const updatedLists = [...list];
//         updatedLists.splice(index,1);
//         setList(updatedLists);
//     }

//     const toggleTask = (index) => {
//         const updatedLists = [...list];
//         updatedLists[index].completed = !updatedLists[index].completed;
//         setInput(updatedLists);
//       };

//   return (
//     <div>
//         <h3>It's a Manager task</h3>
//         <div>
//             <input type='text' placeholder='Add a task' value={input} onChange={(e)=>setInput(e.target.value)}></input>
//             <br/>
//             <button onClick={addTask}>Add</button>
//             <ol>
//                 {
//                     list.map((lists,index)=>(
//                         <li key={index}>
//                             <input type="checkbox"  checked={list.completed}  onChange={() => toggleTask(index)}
//             />
//                             {lists.text}
//                             <button onClick={()=>removeTask(index)}>Remove</button>
//                         </li>
//                     ))
//                 }
//             </ol>
//         </div>
//     </div>
//   )
// }

// export default TodoManager










import React, { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
