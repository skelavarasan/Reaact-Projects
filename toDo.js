import React, { useState } from 'react'

function ToDo() {

    const[list,setList] = useState([]);
    const[input,setInput] = useState('');

    const addTodo = ()=>{
        if (input.trim() !== ''){
          setList([...list,input]);
          setInput(' ');
        }
    };

    const removeTodo = (index)=>{
        const updatedLists = [...list];
        updatedLists.splice(index,1);
        setList(updatedLists);
    };
    

  return (
    <div>
        <h1>My To-Do Lists</h1>
        <div>
            <input 
            type='text'  
            placeholder="Add"

            value={input} 
            
            onChange={(e)=>setInput(e.target.value)}
             />
            <button onClick={addTodo}>Add</button>

            </div>
            <ul>
              {
                list.map((lists,index)=>(
                    <li key={index}>

                      {lists}  
                      
                      <button onClick={()=>removeTodo(index)}>Remove</button>

                     
                    </li>
                    
                ))
              }
            </ul>
      </div>
  );
}

export default ToDo;


















// import React, { useState } from 'react';

// function ToDo() {
//   const [list, setList] = useState([]);
//   const [input, setInput] = useState('');

//   const addTodo = () => {
//     if (input.trim() !== '') {
//       setList([...list, input]);
//       setInput('');
//     }
//   };

//   const removeTodo = (index) => {
//     const updatedLists = [...list];
//     updatedLists.splice(index, 1);
//     setList(updatedLists);
//   };

//   return (
//     <div>
//       <h1>My To-Do List</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Add tasks"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button onClick={addTodo}>Add</button>
//       </div>
//       <ul>
//         {list.map((task, index) => (
//           <li key={index}>
//             {task}
//             <button onClick={() => removeTodo(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ToDo;
