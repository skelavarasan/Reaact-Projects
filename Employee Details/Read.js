import React from 'react'

function Read({employees}) {
  return (
    <div>
        <h2>Employee list</h2>
        <ol>
            {employees.map((employees,index)=>(
                <li key={index}>
                    Name : {employees.name}<br/>
                    Age : {employees.age}<br/>
                    City : {employees.city}
                </li>
            ))}
        </ol>
    </div>
  )
}

export default Read