import React, { useState } from 'react'

function Basics() {

  const[employee,setEmployee] = useState('');

  const handleCheck = ()=>{
    setTimeout(()=>{
      setEmployee("Vikaxx bruh");
    },1000)
  
    setTimeout(()=>{
      setEmployee("Akaxx");
    },4000)
  }
  return (
    <div>
       <h2>{employee}</h2>
       <button onClick={handleCheck}>Add</button>
    </div>
  )
}

export default Basics