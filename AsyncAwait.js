import React, { useEffect, useState } from 'react'

function AsyncAwait() {

    const[data,setData] = useState(null);

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setData(data);
            }
            catch(error){
                console.log("We're fucked up",error);
            }
        }

        fetchData();
    },[]);
  return (
    <div>
        {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
                id : {item.id}
                <br/>

               title:  {item.title}
               <br/>
               body :  {item.body}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  )
}

export default AsyncAwait