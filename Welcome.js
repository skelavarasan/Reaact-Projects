// import React,{Component} from 'react'
// class Welcome extends Component {
//     constructor(props) {
//       super(props);
//       this.state = { count: 0 };
//     }
  
//     render() {
//       return (
//         <div>
//           <p>Count: {this.state.count}</p>
//           <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//             Increment
//           </button>

//           <br/>

//         <button onClick={()=> this.setState({count : this.state.count - 1})}>
//             Decrement
//         </button>

//           <br/>

//         <button onClick={()=> this.setState({count : this.state.count = 0})}>
//             default
//         </button>

//         </div>
//       );
//     }
//   }
  
// export default Welcome


















// import React, { useState } from 'react'

// function Welcome() {

//     const[count,setCount] = useState(7);

     
    

//   return (
//     <div>
//         <h1> count : {count}</h1>
//         <button onClick={()=>{setCount(count- 1)}}>
//             decre
//         </button>
//     </div>
//   )
// }

// export default Welcome














import React, { useState } from 'react'

function Welcome() {

  const[name,setName] = useState('')
  const addName = ()=>{
    setName("Elavarasxx");
  }
  return (
    <div>
        <h1>Hello bro</h1>
        <h2>{name}</h2>
        <button onClick={addName}>add</button>
    </div>
  )
}

export default Welcome